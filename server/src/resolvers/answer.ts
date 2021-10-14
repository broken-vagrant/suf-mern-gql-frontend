import { DocumentType } from '@typegoose/typegoose'
import { AuthenticationError, UserInputError } from 'apollo-server'
import { Arg, Ctx, ID, Mutation, Query, Resolver } from 'type-graphql'
import { VoteType } from '../entities'
import { Answer, AnswerModel } from '../entities/Answer'
import { Question, QuestionModel } from '../entities/Question'
import { UserModel } from '../entities/User'
import { TContext } from '../types'
import authChecker from '../utils/authChecker'
import errorHandler from '../utils/errorHandler'
import { ansRep, downvoteIt, upvoteIt } from '../utils/helperFuncs'

@Resolver(of => Answer)
export class AnswerResolver {
  @Mutation(returns => [Answer])
  async postAnswer(@Arg('quesId', type => ID) quesId: string, @Arg('body') body: string, @Ctx() context: TContext): Promise<Answer[]> {
    const loggedUser = authChecker(context)

    if (body.trim() === '' || body.length < 30) {
      throw new UserInputError('Answer must be atleast 30 characters long.')
    }

    try {
      const author = await UserModel.findById(loggedUser.id)
      const question = await QuestionModel.findById(quesId).populate('answers').exec();
      if (!author) {
        throw new UserInputError(
          `User with ID: ${loggedUser.id} does not exist in DB.`
        )
      }
      if (!question) {
        throw new UserInputError(
          `Question with ID: ${quesId} does not exist in DB.`
        )
      }
      const answer = new AnswerModel({
        body,
        author: author._id
      })
      await answer.save();


      question.answers.push(answer._id)
      const savedQues = await question.save()
      const populatedQues = await savedQues.populate({
        path: 'answers',
        populate: {
          path: 'author'
        }
      })
      console.log('popualted:', populatedQues);


      author.answers.push({
        ansId: savedQues.answers[savedQues.answers.length - 1],
      })
      await author.save()

      return populatedQues.answers as Answer[];
    } catch (err) {
      throw new UserInputError(errorHandler(err))
    }
  }
  @Mutation(returns => ID)
  async deleteAnswer(@Arg('quesId') quesId: string, @Arg('ansId') ansId: string, @Ctx() context: TContext): Promise<string> {
    const loggedUser = authChecker(context)

    try {
      const user = await UserModel.findById(loggedUser.id)
      if (!user) {
        throw new UserInputError(
          `User with ID: ${loggedUser.id} does not exist in DB.`
        )
      }
      const question = await QuestionModel.findById(quesId)
      if (!question) {
        throw new UserInputError(
          `Question with ID: ${quesId} does not exist in DB.`
        )
      }
      const answer = await AnswerModel.findByIdAndDelete(ansId)
      console.log(answer);

      const targetAnswerId = question.answers.find(
        a => a.toString() === ansId
      )

      if (!targetAnswerId) {
        throw new UserInputError(
          `Answer with ID: '${ansId}' does not exist in DB.`
        )
      }

      if (
        targetAnswerId.toString() !== user._id.toString() &&
        user.role !== 'admin'
      ) {
        throw new AuthenticationError('Access is denied.')
      }

      question.answers = question.answers.filter(
        a => a.toString() !== ansId
      )
      await question.save()
      return ansId
    } catch (err) {
      throw new UserInputError(errorHandler(err))
    }
  }
  @Mutation(returns => [Answer], { nullable: false })
  async editAnswer(@Arg('quesId') quesId: string, @Arg('ansId') ansId: string, @Arg('body') body: string, @Ctx() context: TContext): Promise<Answer[]> {
    const loggedUser = authChecker(context)

    if (body.trim() === '' || body.length < 30) {
      throw new UserInputError('Answer must be atleast 30 characters long.')
    }

    try {
      const answer = await AnswerModel.findById(ansId);
      if (!answer) {
        throw new UserInputError(
          `Answer with ID: ${ansId} does not exist in DB.`
        )
      }

      if (answer.author.toString() !== loggedUser.id.toString()) {
        throw new AuthenticationError('Access is denied.')
      }
      answer.body = body;
      answer.updatedAt = new Date();
      await answer.save()

      const question = await QuestionModel.findById(quesId)
      if (!question) {
        throw new UserInputError(
          `Question with ID: ${quesId} does not exist in DB.`
        )
      }
      const populatedQues = await question.populate(['answers', 'answers.author', 'answers.comments.author']);

      console.log('populated  question:', populatedQues);

      return populatedQues.answers as Answer[];
    } catch (err) {
      throw new UserInputError(errorHandler(err))
    }
  }
  @Mutation(returns => Answer)
  async voteAnswer(@Arg('quesId') quesId: string, @Arg('ansId') ansId: string, @Arg('voteType', type => VoteType) voteType: VoteType, @Ctx() context: TContext): Promise<Answer> {
    const loggedUser = authChecker(context);

    try {
      const user = await UserModel.findById(loggedUser.id)
      const question = await QuestionModel.findById(quesId)
      if (!user) {
        throw new UserInputError(
          `User with ID: ${loggedUser.id} does not exist in DB.`
        )
      }
      if (!question) {
        throw new UserInputError(
          `Question with ID: ${quesId} does not exist in DB.`
        )
      }
      const answer = await AnswerModel.findById(ansId)

      if (!answer) {
        throw new UserInputError(
          `Answer with ID: ${ansId} does not exist in DB.`
        )
      }

      if (answer._id.toString() === user._id.toString()) {
        throw new UserInputError("You can't vote for your own post.")
      }

      let votedAns: DocumentType<Answer>;
      if (voteType === VoteType.UPVOTE) {
        votedAns = upvoteIt(answer, user)
      } else {
        votedAns = downvoteIt(answer, user)
      }
      await votedAns.save();

      const populatedAns = await votedAns.populate(['author', 'comments.author']);

      const author = await UserModel.findById(votedAns.author);
      if (!author) {
        throw new UserInputError(
          `User with ID: ${votedAns.author} does not exist in DB.`
        )
      }
      const addedRepAuthor = ansRep(populatedAns, author)
      await addedRepAuthor.save()

      return populatedAns;
    } catch (err) {
      throw new UserInputError(errorHandler(err))
    }
  }
  @Mutation(returns => Question)
  async acceptAnswer(@Arg('quesId') quesId: string, @Arg('ansId') ansId: string, @Ctx() context: TContext): Promise<Question> {
    const loggedUser = authChecker(context)

    try {
      const question = await QuestionModel.findById(quesId)
      if (!question) {
        throw new UserInputError(
          `Question with ID: ${quesId} does not exist in DB.`
        )
      }

      const targetAnswerId = question.answers.find(
        a => a.toString() === ansId
      )

      if (!targetAnswerId) {
        throw new UserInputError(
          `Answer with ID: '${ansId}' does not exist in DB.`
        )
      }

      if (question.author.toString() !== loggedUser.id.toString()) {
        throw new UserInputError(
          'Only the author of question can accept answers.'
        )
      }

      if (
        !question.acceptedAnswer ||
        !(question.acceptedAnswer.toString() === targetAnswerId.toString()
        )) {
        question.acceptedAnswer = targetAnswerId;
      }
      const savedQues = await question.save()
      const populatedQues = await savedQues
        .populate(['answers.author', 'answers.comments.author']);

      return populatedQues as Question;
    } catch (err) {
      throw new UserInputError(errorHandler(err))
    }
  }
}
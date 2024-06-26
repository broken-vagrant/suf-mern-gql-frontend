import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Answer = {
  __typename?: 'Answer';
  _id: Scalars['ID'];
  author: Author;
  body: Scalars['String'];
  comments: Array<Comment>;
  points: Scalars['Int'];
  voted?: Maybe<VoteType>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type AnswerVotes = {
  __typename?: 'AnswerVotes';
  userId: Scalars['ID'];
  ansId: Scalars['ID'];
  vote: VoteType;
};

export type Author = {
  __typename?: 'Author';
  _id: Scalars['ID'];
  username: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['ID'];
  author: Author;
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum CommentParentType {
  Question = 'Question',
  Answer = 'Answer'
}

export type GetAllTagsResult = {
  __typename?: 'GetAllTagsResult';
  tags: Array<Tag>;
  nextCursor: Scalars['String'];
};

export type LoggedUser = {
  __typename?: 'LoggedUser';
  _id: Scalars['ID'];
  username: Scalars['String'];
  token: Scalars['String'];
  role: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  postAnswer: Array<Answer>;
  deleteAnswer: Scalars['ID'];
  editAnswer: Array<Answer>;
  voteAnswer: Answer;
  acceptAnswer: Question;
  addComment: Comment;
  deleteComment: Scalars['ID'];
  editComment: Comment;
  postQuestion: Question;
  deleteQuestion: Scalars['ID'];
  editQuestion: Question;
  voteQuestion: Question;
  register: LoggedUser;
  login: LoggedUser;
};


export type MutationPostAnswerArgs = {
  body: Scalars['String'];
  quesId: Scalars['ID'];
};


export type MutationDeleteAnswerArgs = {
  ansId: Scalars['ID'];
  quesId: Scalars['ID'];
};


export type MutationEditAnswerArgs = {
  body: Scalars['String'];
  ansId: Scalars['ID'];
  quesId: Scalars['ID'];
};


export type MutationVoteAnswerArgs = {
  voteType: VoteType;
  ansId: Scalars['ID'];
  quesId: Scalars['ID'];
};


export type MutationAcceptAnswerArgs = {
  ansId: Scalars['ID'];
  quesId: Scalars['ID'];
};


export type MutationAddCommentArgs = {
  body: Scalars['String'];
  parentId: Scalars['ID'];
  parentType: CommentParentType;
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['ID'];
};


export type MutationEditCommentArgs = {
  body: Scalars['String'];
  commentId: Scalars['ID'];
};


export type MutationPostQuestionArgs = {
  tags: Array<Scalars['String']>;
  body: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeleteQuestionArgs = {
  quesId: Scalars['ID'];
};


export type MutationEditQuestionArgs = {
  tags: Array<Scalars['String']>;
  body: Scalars['String'];
  title: Scalars['String'];
  quesId: Scalars['ID'];
};


export type MutationVoteQuestionArgs = {
  voteType: VoteType;
  quesId: Scalars['ID'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type NextPrevPage = {
  __typename?: 'NextPrevPage';
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type PaginatedQuesList = {
  __typename?: 'PaginatedQuesList';
  questions: Array<Maybe<Question>>;
  totalCount: Scalars['Float'];
  currentPage: Scalars['Float'];
  pageSize: Scalars['Float'];
  tag?: Maybe<Scalars['String']>;
  sortBy: QuestionSortBy;
  search?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getQuestions: PaginatedQuesList;
  viewQuestion: Question;
  getAllTags: GetAllTagsResult;
  whoami: User;
  getUser: User;
  getAllUsers: Array<User>;
};


export type QueryGetQuestionsArgs = {
  page: Scalars['Int'];
  limit: Scalars['Int'];
  sortBy?: InputMaybe<QuestionSortBy>;
  filterByTag?: InputMaybe<Scalars['String']>;
  filterBySearch?: InputMaybe<Scalars['String']>;
};


export type QueryViewQuestionArgs = {
  quesId: Scalars['ID'];
};


export type QueryGetAllTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['ID']>;
  filterBySearch?: InputMaybe<Scalars['String']>;
};


export type QueryGetUserArgs = {
  username: Scalars['String'];
};

export type Question = {
  __typename?: 'Question';
  _id: Scalars['ID'];
  author: Author;
  title: Scalars['String'];
  body: Scalars['String'];
  tags: Array<Scalars['String']>;
  comments: Array<Comment>;
  answers: Array<Answer>;
  answerCount: Scalars['Int'];
  points: Scalars['Int'];
  views: Scalars['Int'];
  hotAlgo: Scalars['Float'];
  acceptedAnswer?: Maybe<Scalars['ID']>;
  voted?: Maybe<VoteType>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum QuestionSortBy {
  Hot = 'HOT',
  Votes = 'VOTES',
  Views = 'VIEWS',
  Newest = 'NEWEST',
  Oldest = 'OLDEST'
}

export type QuestionVotes = {
  __typename?: 'QuestionVotes';
  userId: Scalars['ID'];
  quesId: Scalars['ID'];
  vote: VoteType;
};

export type RecentActivity = {
  __typename?: 'RecentActivity';
  _id: Scalars['ID'];
  title: Scalars['String'];
  points: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export enum RoleType {
  User = 'USER',
  Admin = 'ADMIN'
}

export type Tag = {
  __typename?: 'Tag';
  _id: Scalars['ID'];
  name: Scalars['String'];
  questionCount: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  username: Scalars['String'];
  role: RoleType;
  questions: Array<Question>;
  answers: Array<Answer>;
  createdAt: Scalars['DateTime'];
  rep: Scalars['Int'];
  recentQuestions: Array<RecentActivity>;
  recentAnswers: Array<RecentActivity>;
  totalQuestions: Scalars['Int'];
  totalAnswers: Scalars['Int'];
};

export enum VoteType {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type AuthorDetailsFragment = { __typename?: 'Author', _id: string, username: string };

export type AnswerDetailsFragment = { __typename?: 'Answer', _id: string, body: string, points: number, voted?: VoteType | null, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string }, comments: Array<{ __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } }> };

export type QuestionDetailsFragment = { __typename?: 'Question', _id: string, title: string, body: string, tags: Array<string>, points: number, views: number, acceptedAnswer?: string | null, voted?: VoteType | null, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string }, comments: Array<{ __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } }>, answers: Array<{ __typename?: 'Answer', _id: string, body: string, points: number, voted?: VoteType | null, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string }, comments: Array<{ __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } }> }> };

export type PostQuestionDetailsFragment = { __typename?: 'Question', _id: string, title: string, body: string, tags: Array<string>, points: number, views: number, voted?: VoteType | null, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } };

export type LoggedUserDetailsFragment = { __typename?: 'LoggedUser', _id: string, username: string, role: string, token: string };

export type CommentDetailsFragment = { __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } };

export type RegisterUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: { __typename?: 'LoggedUser', _id: string, username: string, role: string, token: string } };

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'LoggedUser', _id: string, username: string, role: string, token: string } };

export type AddQuestionMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
  tags: Array<Scalars['String']> | Scalars['String'];
}>;


export type AddQuestionMutation = { __typename?: 'Mutation', postQuestion: { __typename?: 'Question', _id: string, title: string, body: string, tags: Array<string>, points: number, views: number, voted?: VoteType | null, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } } };

export type UpdateQuestionMutationVariables = Exact<{
  quesId: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  tags: Array<Scalars['String']> | Scalars['String'];
}>;


export type UpdateQuestionMutation = { __typename?: 'Mutation', editQuestion: { __typename?: 'Question', _id: string, title: string, body: string, tags: Array<string>, points: number, views: number, acceptedAnswer?: string | null, voted?: VoteType | null, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string }, comments: Array<{ __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } }>, answers: Array<{ __typename?: 'Answer', _id: string, body: string, points: number, voted?: VoteType | null, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string }, comments: Array<{ __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } }> }> } };

export type RemoveQuestionMutationVariables = Exact<{
  quesId: Scalars['ID'];
}>;


export type RemoveQuestionMutation = { __typename?: 'Mutation', deleteQuestion: string };

export type SubmitQuesVoteMutationVariables = Exact<{
  quesId: Scalars['ID'];
  voteType: VoteType;
}>;


export type SubmitQuesVoteMutation = { __typename?: 'Mutation', voteQuestion: { __typename?: 'Question', _id: string, voted?: VoteType | null, points: number } };

export type AddCommentMutationVariables = Exact<{
  parentId: Scalars['ID'];
  parentType: CommentParentType;
  body: Scalars['String'];
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment: { __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } } };

export type EditCommentMutationVariables = Exact<{
  commentId: Scalars['ID'];
  body: Scalars['String'];
}>;


export type EditCommentMutation = { __typename?: 'Mutation', editComment: { __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } } };

export type DeleteCommentMutationVariables = Exact<{
  commentId: Scalars['ID'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: string };

export type AddAnswerMutationVariables = Exact<{
  quesId: Scalars['ID'];
  body: Scalars['String'];
}>;


export type AddAnswerMutation = { __typename?: 'Mutation', postAnswer: Array<{ __typename?: 'Answer', _id: string, body: string, points: number, voted?: VoteType | null, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string }, comments: Array<{ __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } }> }> };

export type UpdateAnswerMutationVariables = Exact<{
  quesId: Scalars['ID'];
  ansId: Scalars['ID'];
  body: Scalars['String'];
}>;


export type UpdateAnswerMutation = { __typename?: 'Mutation', editAnswer: Array<{ __typename?: 'Answer', _id: string, body: string, points: number, voted?: VoteType | null, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string }, comments: Array<{ __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } }> }> };

export type RemoveAnswerMutationVariables = Exact<{
  quesId: Scalars['ID'];
  ansId: Scalars['ID'];
}>;


export type RemoveAnswerMutation = { __typename?: 'Mutation', deleteAnswer: string };

export type SubmitAnsVoteMutationVariables = Exact<{
  quesId: Scalars['ID'];
  ansId: Scalars['ID'];
  voteType: VoteType;
}>;


export type SubmitAnsVoteMutation = { __typename?: 'Mutation', voteAnswer: { __typename?: 'Answer', _id: string, voted?: VoteType | null, points: number } };

export type SubmitAcceptAnsMutationVariables = Exact<{
  quesId: Scalars['ID'];
  ansId: Scalars['ID'];
}>;


export type SubmitAcceptAnsMutation = { __typename?: 'Mutation', acceptAnswer: { __typename?: 'Question', _id: string, acceptedAnswer?: string | null } };

export type FetchQuestionsQueryVariables = Exact<{
  sortBy: QuestionSortBy;
  page: Scalars['Int'];
  limit: Scalars['Int'];
  filterByTag?: InputMaybe<Scalars['String']>;
  filterBySearch?: InputMaybe<Scalars['String']>;
}>;


export type FetchQuestionsQuery = { __typename?: 'Query', getQuestions: { __typename?: 'PaginatedQuesList', totalCount: number, currentPage: number, pageSize: number, search?: string | null, tag?: string | null, sortBy: QuestionSortBy, questions: Array<{ __typename?: 'Question', _id: string, title: string, body: string, tags: Array<string>, points: number, views: number, createdAt: any, updatedAt: any, answerCount: number, author: { __typename?: 'Author', _id: string, username: string } } | null> } };

export type FetchQuestionQueryVariables = Exact<{
  quesId: Scalars['ID'];
}>;


export type FetchQuestionQuery = { __typename?: 'Query', viewQuestion: { __typename?: 'Question', _id: string, title: string, body: string, tags: Array<string>, points: number, views: number, createdAt: any, updatedAt: any, acceptedAnswer?: string | null, voted?: VoteType | null, author: { __typename?: 'Author', _id: string, username: string }, answers: Array<{ __typename?: 'Answer', _id: string, body: string, points: number, voted?: VoteType | null, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string }, comments: Array<{ __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } }> }>, comments: Array<{ __typename?: 'Comment', _id: string, body: string, createdAt: any, updatedAt: any, author: { __typename?: 'Author', _id: string, username: string } }> } };

export type FetchUserQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type FetchUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', _id: string, username: string, role: RoleType, createdAt: any, rep: number, totalQuestions: number, totalAnswers: number, recentQuestions: Array<{ __typename?: 'RecentActivity', _id: string, title: string, points: number, createdAt: any }>, recentAnswers: Array<{ __typename?: 'RecentActivity', _id: string, title: string, points: number, createdAt: any }> } };

export type FetchAllTagsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: InputMaybe<Scalars['ID']>;
  filterBySearch?: InputMaybe<Scalars['String']>;
}>;


export type FetchAllTagsQuery = { __typename?: 'Query', getAllTags: { __typename?: 'GetAllTagsResult', nextCursor: string, tags: Array<{ __typename?: 'Tag', name: string, _id: string, questionCount: number }> } };

export type FetchAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', _id: string, username: string, createdAt: any }> };

export const AuthorDetailsFragmentDoc = gql`
    fragment AuthorDetails on Author {
  _id
  username
}
    `;
export const CommentDetailsFragmentDoc = gql`
    fragment CommentDetails on Comment {
  _id
  author {
    ...AuthorDetails
  }
  body
  createdAt
  updatedAt
}
    ${AuthorDetailsFragmentDoc}`;
export const AnswerDetailsFragmentDoc = gql`
    fragment AnswerDetails on Answer {
  _id
  author {
    ...AuthorDetails
  }
  body
  comments {
    ...CommentDetails
  }
  points
  voted
  createdAt
  updatedAt
}
    ${AuthorDetailsFragmentDoc}
${CommentDetailsFragmentDoc}`;
export const QuestionDetailsFragmentDoc = gql`
    fragment QuestionDetails on Question {
  _id
  author {
    ...AuthorDetails
  }
  title
  body
  tags
  points
  views
  acceptedAnswer
  comments {
    ...CommentDetails
  }
  answers {
    ...AnswerDetails
  }
  voted
  createdAt
  updatedAt
}
    ${AuthorDetailsFragmentDoc}
${CommentDetailsFragmentDoc}
${AnswerDetailsFragmentDoc}`;
export const PostQuestionDetailsFragmentDoc = gql`
    fragment PostQuestionDetails on Question {
  _id
  author {
    ...AuthorDetails
  }
  title
  body
  tags
  points
  views
  voted
  createdAt
  updatedAt
}
    ${AuthorDetailsFragmentDoc}`;
export const LoggedUserDetailsFragmentDoc = gql`
    fragment LoggedUserDetails on LoggedUser {
  _id
  username
  role
  token
}
    `;
export const RegisterUserDocument = gql`
    mutation registerUser($username: String!, $password: String!) {
  register(username: $username, password: $password) {
    ...LoggedUserDetails
  }
}
    ${LoggedUserDetailsFragmentDoc}`;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation loginUser($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ...LoggedUserDetails
  }
}
    ${LoggedUserDetailsFragmentDoc}`;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const AddQuestionDocument = gql`
    mutation addQuestion($title: String!, $body: String!, $tags: [String!]!) {
  postQuestion(title: $title, body: $body, tags: $tags) {
    ...PostQuestionDetails
  }
}
    ${PostQuestionDetailsFragmentDoc}`;
export type AddQuestionMutationFn = Apollo.MutationFunction<AddQuestionMutation, AddQuestionMutationVariables>;

/**
 * __useAddQuestionMutation__
 *
 * To run a mutation, you first call `useAddQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addQuestionMutation, { data, loading, error }] = useAddQuestionMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useAddQuestionMutation(baseOptions?: Apollo.MutationHookOptions<AddQuestionMutation, AddQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddQuestionMutation, AddQuestionMutationVariables>(AddQuestionDocument, options);
      }
export type AddQuestionMutationHookResult = ReturnType<typeof useAddQuestionMutation>;
export type AddQuestionMutationResult = Apollo.MutationResult<AddQuestionMutation>;
export type AddQuestionMutationOptions = Apollo.BaseMutationOptions<AddQuestionMutation, AddQuestionMutationVariables>;
export const UpdateQuestionDocument = gql`
    mutation updateQuestion($quesId: ID!, $title: String!, $body: String!, $tags: [String!]!) {
  editQuestion(quesId: $quesId, title: $title, body: $body, tags: $tags) {
    ...QuestionDetails
  }
}
    ${QuestionDetailsFragmentDoc}`;
export type UpdateQuestionMutationFn = Apollo.MutationFunction<UpdateQuestionMutation, UpdateQuestionMutationVariables>;

/**
 * __useUpdateQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionMutation, { data, loading, error }] = useUpdateQuestionMutation({
 *   variables: {
 *      quesId: // value for 'quesId'
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useUpdateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestionMutation, UpdateQuestionMutationVariables>(UpdateQuestionDocument, options);
      }
export type UpdateQuestionMutationHookResult = ReturnType<typeof useUpdateQuestionMutation>;
export type UpdateQuestionMutationResult = Apollo.MutationResult<UpdateQuestionMutation>;
export type UpdateQuestionMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>;
export const RemoveQuestionDocument = gql`
    mutation removeQuestion($quesId: ID!) {
  deleteQuestion(quesId: $quesId)
}
    `;
export type RemoveQuestionMutationFn = Apollo.MutationFunction<RemoveQuestionMutation, RemoveQuestionMutationVariables>;

/**
 * __useRemoveQuestionMutation__
 *
 * To run a mutation, you first call `useRemoveQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeQuestionMutation, { data, loading, error }] = useRemoveQuestionMutation({
 *   variables: {
 *      quesId: // value for 'quesId'
 *   },
 * });
 */
export function useRemoveQuestionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveQuestionMutation, RemoveQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveQuestionMutation, RemoveQuestionMutationVariables>(RemoveQuestionDocument, options);
      }
export type RemoveQuestionMutationHookResult = ReturnType<typeof useRemoveQuestionMutation>;
export type RemoveQuestionMutationResult = Apollo.MutationResult<RemoveQuestionMutation>;
export type RemoveQuestionMutationOptions = Apollo.BaseMutationOptions<RemoveQuestionMutation, RemoveQuestionMutationVariables>;
export const SubmitQuesVoteDocument = gql`
    mutation submitQuesVote($quesId: ID!, $voteType: VoteType!) {
  voteQuestion(quesId: $quesId, voteType: $voteType) {
    _id
    voted
    points
  }
}
    `;
export type SubmitQuesVoteMutationFn = Apollo.MutationFunction<SubmitQuesVoteMutation, SubmitQuesVoteMutationVariables>;

/**
 * __useSubmitQuesVoteMutation__
 *
 * To run a mutation, you first call `useSubmitQuesVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitQuesVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitQuesVoteMutation, { data, loading, error }] = useSubmitQuesVoteMutation({
 *   variables: {
 *      quesId: // value for 'quesId'
 *      voteType: // value for 'voteType'
 *   },
 * });
 */
export function useSubmitQuesVoteMutation(baseOptions?: Apollo.MutationHookOptions<SubmitQuesVoteMutation, SubmitQuesVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitQuesVoteMutation, SubmitQuesVoteMutationVariables>(SubmitQuesVoteDocument, options);
      }
export type SubmitQuesVoteMutationHookResult = ReturnType<typeof useSubmitQuesVoteMutation>;
export type SubmitQuesVoteMutationResult = Apollo.MutationResult<SubmitQuesVoteMutation>;
export type SubmitQuesVoteMutationOptions = Apollo.BaseMutationOptions<SubmitQuesVoteMutation, SubmitQuesVoteMutationVariables>;
export const AddCommentDocument = gql`
    mutation addComment($parentId: ID!, $parentType: CommentParentType!, $body: String!) {
  addComment(parentId: $parentId, body: $body, parentType: $parentType) {
    ...CommentDetails
  }
}
    ${CommentDetailsFragmentDoc}`;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      parentId: // value for 'parentId'
 *      parentType: // value for 'parentType'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const EditCommentDocument = gql`
    mutation editComment($commentId: ID!, $body: String!) {
  editComment(commentId: $commentId, body: $body) {
    ...CommentDetails
  }
}
    ${CommentDetailsFragmentDoc}`;
export type EditCommentMutationFn = Apollo.MutationFunction<EditCommentMutation, EditCommentMutationVariables>;

/**
 * __useEditCommentMutation__
 *
 * To run a mutation, you first call `useEditCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommentMutation, { data, loading, error }] = useEditCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useEditCommentMutation(baseOptions?: Apollo.MutationHookOptions<EditCommentMutation, EditCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCommentMutation, EditCommentMutationVariables>(EditCommentDocument, options);
      }
export type EditCommentMutationHookResult = ReturnType<typeof useEditCommentMutation>;
export type EditCommentMutationResult = Apollo.MutationResult<EditCommentMutation>;
export type EditCommentMutationOptions = Apollo.BaseMutationOptions<EditCommentMutation, EditCommentMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation deleteComment($commentId: ID!) {
  deleteComment(commentId: $commentId)
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const AddAnswerDocument = gql`
    mutation addAnswer($quesId: ID!, $body: String!) {
  postAnswer(quesId: $quesId, body: $body) {
    ...AnswerDetails
  }
}
    ${AnswerDetailsFragmentDoc}`;
export type AddAnswerMutationFn = Apollo.MutationFunction<AddAnswerMutation, AddAnswerMutationVariables>;

/**
 * __useAddAnswerMutation__
 *
 * To run a mutation, you first call `useAddAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAnswerMutation, { data, loading, error }] = useAddAnswerMutation({
 *   variables: {
 *      quesId: // value for 'quesId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useAddAnswerMutation(baseOptions?: Apollo.MutationHookOptions<AddAnswerMutation, AddAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAnswerMutation, AddAnswerMutationVariables>(AddAnswerDocument, options);
      }
export type AddAnswerMutationHookResult = ReturnType<typeof useAddAnswerMutation>;
export type AddAnswerMutationResult = Apollo.MutationResult<AddAnswerMutation>;
export type AddAnswerMutationOptions = Apollo.BaseMutationOptions<AddAnswerMutation, AddAnswerMutationVariables>;
export const UpdateAnswerDocument = gql`
    mutation updateAnswer($quesId: ID!, $ansId: ID!, $body: String!) {
  editAnswer(quesId: $quesId, ansId: $ansId, body: $body) {
    ...AnswerDetails
  }
}
    ${AnswerDetailsFragmentDoc}`;
export type UpdateAnswerMutationFn = Apollo.MutationFunction<UpdateAnswerMutation, UpdateAnswerMutationVariables>;

/**
 * __useUpdateAnswerMutation__
 *
 * To run a mutation, you first call `useUpdateAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnswerMutation, { data, loading, error }] = useUpdateAnswerMutation({
 *   variables: {
 *      quesId: // value for 'quesId'
 *      ansId: // value for 'ansId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useUpdateAnswerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAnswerMutation, UpdateAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAnswerMutation, UpdateAnswerMutationVariables>(UpdateAnswerDocument, options);
      }
export type UpdateAnswerMutationHookResult = ReturnType<typeof useUpdateAnswerMutation>;
export type UpdateAnswerMutationResult = Apollo.MutationResult<UpdateAnswerMutation>;
export type UpdateAnswerMutationOptions = Apollo.BaseMutationOptions<UpdateAnswerMutation, UpdateAnswerMutationVariables>;
export const RemoveAnswerDocument = gql`
    mutation removeAnswer($quesId: ID!, $ansId: ID!) {
  deleteAnswer(quesId: $quesId, ansId: $ansId)
}
    `;
export type RemoveAnswerMutationFn = Apollo.MutationFunction<RemoveAnswerMutation, RemoveAnswerMutationVariables>;

/**
 * __useRemoveAnswerMutation__
 *
 * To run a mutation, you first call `useRemoveAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAnswerMutation, { data, loading, error }] = useRemoveAnswerMutation({
 *   variables: {
 *      quesId: // value for 'quesId'
 *      ansId: // value for 'ansId'
 *   },
 * });
 */
export function useRemoveAnswerMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAnswerMutation, RemoveAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveAnswerMutation, RemoveAnswerMutationVariables>(RemoveAnswerDocument, options);
      }
export type RemoveAnswerMutationHookResult = ReturnType<typeof useRemoveAnswerMutation>;
export type RemoveAnswerMutationResult = Apollo.MutationResult<RemoveAnswerMutation>;
export type RemoveAnswerMutationOptions = Apollo.BaseMutationOptions<RemoveAnswerMutation, RemoveAnswerMutationVariables>;
export const SubmitAnsVoteDocument = gql`
    mutation submitAnsVote($quesId: ID!, $ansId: ID!, $voteType: VoteType!) {
  voteAnswer(quesId: $quesId, ansId: $ansId, voteType: $voteType) {
    _id
    voted
    points
  }
}
    `;
export type SubmitAnsVoteMutationFn = Apollo.MutationFunction<SubmitAnsVoteMutation, SubmitAnsVoteMutationVariables>;

/**
 * __useSubmitAnsVoteMutation__
 *
 * To run a mutation, you first call `useSubmitAnsVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitAnsVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitAnsVoteMutation, { data, loading, error }] = useSubmitAnsVoteMutation({
 *   variables: {
 *      quesId: // value for 'quesId'
 *      ansId: // value for 'ansId'
 *      voteType: // value for 'voteType'
 *   },
 * });
 */
export function useSubmitAnsVoteMutation(baseOptions?: Apollo.MutationHookOptions<SubmitAnsVoteMutation, SubmitAnsVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitAnsVoteMutation, SubmitAnsVoteMutationVariables>(SubmitAnsVoteDocument, options);
      }
export type SubmitAnsVoteMutationHookResult = ReturnType<typeof useSubmitAnsVoteMutation>;
export type SubmitAnsVoteMutationResult = Apollo.MutationResult<SubmitAnsVoteMutation>;
export type SubmitAnsVoteMutationOptions = Apollo.BaseMutationOptions<SubmitAnsVoteMutation, SubmitAnsVoteMutationVariables>;
export const SubmitAcceptAnsDocument = gql`
    mutation submitAcceptAns($quesId: ID!, $ansId: ID!) {
  acceptAnswer(quesId: $quesId, ansId: $ansId) {
    _id
    acceptedAnswer
  }
}
    `;
export type SubmitAcceptAnsMutationFn = Apollo.MutationFunction<SubmitAcceptAnsMutation, SubmitAcceptAnsMutationVariables>;

/**
 * __useSubmitAcceptAnsMutation__
 *
 * To run a mutation, you first call `useSubmitAcceptAnsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitAcceptAnsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitAcceptAnsMutation, { data, loading, error }] = useSubmitAcceptAnsMutation({
 *   variables: {
 *      quesId: // value for 'quesId'
 *      ansId: // value for 'ansId'
 *   },
 * });
 */
export function useSubmitAcceptAnsMutation(baseOptions?: Apollo.MutationHookOptions<SubmitAcceptAnsMutation, SubmitAcceptAnsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitAcceptAnsMutation, SubmitAcceptAnsMutationVariables>(SubmitAcceptAnsDocument, options);
      }
export type SubmitAcceptAnsMutationHookResult = ReturnType<typeof useSubmitAcceptAnsMutation>;
export type SubmitAcceptAnsMutationResult = Apollo.MutationResult<SubmitAcceptAnsMutation>;
export type SubmitAcceptAnsMutationOptions = Apollo.BaseMutationOptions<SubmitAcceptAnsMutation, SubmitAcceptAnsMutationVariables>;
export const FetchQuestionsDocument = gql`
    query fetchQuestions($sortBy: QuestionSortBy!, $page: Int!, $limit: Int!, $filterByTag: String, $filterBySearch: String) {
  getQuestions(
    sortBy: $sortBy
    page: $page
    limit: $limit
    filterByTag: $filterByTag
    filterBySearch: $filterBySearch
  ) {
    totalCount
    currentPage
    pageSize
    search
    tag
    sortBy
    questions {
      _id
      author {
        ...AuthorDetails
      }
      title
      body
      tags
      points
      views
      createdAt
      updatedAt
      answerCount
    }
  }
}
    ${AuthorDetailsFragmentDoc}`;

/**
 * __useFetchQuestionsQuery__
 *
 * To run a query within a React component, call `useFetchQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchQuestionsQuery({
 *   variables: {
 *      sortBy: // value for 'sortBy'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      filterByTag: // value for 'filterByTag'
 *      filterBySearch: // value for 'filterBySearch'
 *   },
 * });
 */
export function useFetchQuestionsQuery(baseOptions: Apollo.QueryHookOptions<FetchQuestionsQuery, FetchQuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchQuestionsQuery, FetchQuestionsQueryVariables>(FetchQuestionsDocument, options);
      }
export function useFetchQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchQuestionsQuery, FetchQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchQuestionsQuery, FetchQuestionsQueryVariables>(FetchQuestionsDocument, options);
        }
export type FetchQuestionsQueryHookResult = ReturnType<typeof useFetchQuestionsQuery>;
export type FetchQuestionsLazyQueryHookResult = ReturnType<typeof useFetchQuestionsLazyQuery>;
export type FetchQuestionsQueryResult = Apollo.QueryResult<FetchQuestionsQuery, FetchQuestionsQueryVariables>;
export const FetchQuestionDocument = gql`
    query fetchQuestion($quesId: ID!) {
  viewQuestion(quesId: $quesId) {
    _id
    author {
      ...AuthorDetails
    }
    title
    body
    tags
    points
    views
    createdAt
    updatedAt
    answers {
      ...AnswerDetails
    }
    author {
      ...AuthorDetails
    }
    comments {
      ...CommentDetails
    }
    acceptedAnswer
    voted
  }
}
    ${AuthorDetailsFragmentDoc}
${AnswerDetailsFragmentDoc}
${CommentDetailsFragmentDoc}`;

/**
 * __useFetchQuestionQuery__
 *
 * To run a query within a React component, call `useFetchQuestionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchQuestionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchQuestionQuery({
 *   variables: {
 *      quesId: // value for 'quesId'
 *   },
 * });
 */
export function useFetchQuestionQuery(baseOptions: Apollo.QueryHookOptions<FetchQuestionQuery, FetchQuestionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchQuestionQuery, FetchQuestionQueryVariables>(FetchQuestionDocument, options);
      }
export function useFetchQuestionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchQuestionQuery, FetchQuestionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchQuestionQuery, FetchQuestionQueryVariables>(FetchQuestionDocument, options);
        }
export type FetchQuestionQueryHookResult = ReturnType<typeof useFetchQuestionQuery>;
export type FetchQuestionLazyQueryHookResult = ReturnType<typeof useFetchQuestionLazyQuery>;
export type FetchQuestionQueryResult = Apollo.QueryResult<FetchQuestionQuery, FetchQuestionQueryVariables>;
export const FetchUserDocument = gql`
    query fetchUser($username: String!) {
  getUser(username: $username) {
    _id
    username
    role
    createdAt
    rep
    totalQuestions
    totalAnswers
    recentQuestions {
      _id
      title
      points
      createdAt
    }
    recentAnswers {
      _id
      title
      points
      createdAt
    }
  }
}
    `;

/**
 * __useFetchUserQuery__
 *
 * To run a query within a React component, call `useFetchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFetchUserQuery(baseOptions: Apollo.QueryHookOptions<FetchUserQuery, FetchUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, options);
      }
export function useFetchUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUserQuery, FetchUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, options);
        }
export type FetchUserQueryHookResult = ReturnType<typeof useFetchUserQuery>;
export type FetchUserLazyQueryHookResult = ReturnType<typeof useFetchUserLazyQuery>;
export type FetchUserQueryResult = Apollo.QueryResult<FetchUserQuery, FetchUserQueryVariables>;
export const FetchAllTagsDocument = gql`
    query fetchAllTags($limit: Int!, $cursor: ID, $filterBySearch: String) {
  getAllTags(limit: $limit, cursor: $cursor, filterBySearch: $filterBySearch) {
    tags {
      name
      _id
      questionCount
    }
    nextCursor
  }
}
    `;

/**
 * __useFetchAllTagsQuery__
 *
 * To run a query within a React component, call `useFetchAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAllTagsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      filterBySearch: // value for 'filterBySearch'
 *   },
 * });
 */
export function useFetchAllTagsQuery(baseOptions: Apollo.QueryHookOptions<FetchAllTagsQuery, FetchAllTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchAllTagsQuery, FetchAllTagsQueryVariables>(FetchAllTagsDocument, options);
      }
export function useFetchAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchAllTagsQuery, FetchAllTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchAllTagsQuery, FetchAllTagsQueryVariables>(FetchAllTagsDocument, options);
        }
export type FetchAllTagsQueryHookResult = ReturnType<typeof useFetchAllTagsQuery>;
export type FetchAllTagsLazyQueryHookResult = ReturnType<typeof useFetchAllTagsLazyQuery>;
export type FetchAllTagsQueryResult = Apollo.QueryResult<FetchAllTagsQuery, FetchAllTagsQueryVariables>;
export const FetchAllUsersDocument = gql`
    query fetchAllUsers {
  getAllUsers {
    _id
    username
    createdAt
  }
}
    `;

/**
 * __useFetchAllUsersQuery__
 *
 * To run a query within a React component, call `useFetchAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<FetchAllUsersQuery, FetchAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchAllUsersQuery, FetchAllUsersQueryVariables>(FetchAllUsersDocument, options);
      }
export function useFetchAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchAllUsersQuery, FetchAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchAllUsersQuery, FetchAllUsersQueryVariables>(FetchAllUsersDocument, options);
        }
export type FetchAllUsersQueryHookResult = ReturnType<typeof useFetchAllUsersQuery>;
export type FetchAllUsersLazyQueryHookResult = ReturnType<typeof useFetchAllUsersLazyQuery>;
export type FetchAllUsersQueryResult = Apollo.QueryResult<FetchAllUsersQuery, FetchAllUsersQueryVariables>;
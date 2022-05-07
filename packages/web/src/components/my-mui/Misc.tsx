import { Link as RouterLink } from 'react-router-dom'
import tw, { css, styled } from 'twin.macro' // eslint-disable-line no-unused-vars

export const SvgIcon = tw.div`fill-current min-width[1em] min-height[1em] inline-block transition-colors flex-shrink-0 user-select[none] font-size[1.5em]`

export const LightButton = tw.button`
cursor-pointer text-gray-600 bg-transparent border-0 rounded-sm md:rounded-md text-sm hover:text-gray-800 outline-color[darkorange]`

const baseButtonStyles = tw`
inline-block transition-colors border-0 rounded-sm md:rounded-md  padding[.5em .8em] md:padding[.6em 1em]   
 cursor-pointer align-middle outline-offset[2px] text-sm no-underline leading-none whitespace-nowrap 

`
export const Button = styled.button(() => [
  baseButtonStyles,
  tw` bg-blue-500 hover:bg-blue-700 active:bg-blue-700 text-white`,
  css`
    &:disabled {
      opacity: 0.5 !important;
      cursor: wait;
    }
  `,
])

export const ButtonLikeLink = styled(RouterLink)(() => [
  baseButtonStyles,
  tw` bg-blue-500 hover:bg-blue-700 active:bg-blue-700 text-white`,
])

export const ButtonGroupItem = styled.button(
  ({ active }: { active: boolean }) => [
    baseButtonStyles,
    tw`rounded-none`,
    active
      ? tw`bg-black-75 text-gray-800 z-40`
      : tw`bg-white hover:bg-black-25 text-gray-700 `,
  ]
)

export const ButtonGroup = styled.div(() => [
  css`
    border-width: 1px;
    ${tw`rounded-sm md:rounded-md border-solid border-gray-600 sm:flex-none flex flex-auto`}
    button {
      flex: inherit;
      border-radius: unset;
    }
    > button + button {
      border-left-width: 1px;
      ${tw` border-l-gray-600`}
    }
    button:last-child {
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
    }
    button:first-child {
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }
  `,
  tw`text-sm md:text-base w-full sm:w-auto`,
])

export const Link = styled(RouterLink)`
  text-decoration: none;
  ${tw`text-blue-600 hover:text-blue-800`}
`

export const EmptyLink = styled.button`
  text-decoration: none;
  ${tw`bg-transparent border-0 text-blue-600 hover:text-blue-800`}
`

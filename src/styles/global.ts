import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  css,
} from 'styled-components'

type GlobalStylesProps = object

const GlobalStyle: GlobalStyleComponent<GlobalStylesProps, DefaultTheme> =
  createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before,
  &::after {
    box-sizing: inherit;
  }
 }

 ${({ theme }) => css`
   body {
     font-family: ${theme.font.family};
     font-size: ${theme.font.sizes.medium};
     background-color: ${theme.colors.mainBg};
   }
 `}
`
export default GlobalStyle

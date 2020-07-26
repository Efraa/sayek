import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: auto;
    overflow-x: hidden;
    background: ${({ theme: { colors } }) => colors.white};
    font-size: 100%;
    max-width: 768px;
  }

  * {
    font-family: ${({ theme: { fonts } }) => fonts.primary};
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  /* Fonts */
  body,
  button,
  input,
  select,
  textarea {
    font-size: 16px;
    color: ${({ theme: { colors } }) => colors.defaultTextColor};
    font-feature-settings: 'pnum';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant-numeric: proportional-nums;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme: { colors } }) => colors.black};
    margin: 0;
    padding: 0;
  }

  h1,
  .h1 {
    font-size: 26px;
  }

  h2,
  .h2 {
    font-size: 24px;
    line-height: 32px;
  }

  h3,
  .h3 {
    font-size: 32px;
  }

  h4,
  .h4 {
    font-size: 22px;
  }

  p {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme: { colors } }) => colors.defaultTextColor};
  }

  small {
    font-size: 14px;
  }

  p,
  li,
  a,
  span,
  strong,
  input,
  button,
  select,
  textarea {
    line-height: 32px;
    font-weight: 500;
  }
`

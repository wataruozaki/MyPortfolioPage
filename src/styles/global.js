import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
  html {
    max-width: 100%;
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
        'Hiragino Sans', Meiryo, sans-serif;
    }
  }
  h1,
  h2,
  h3,
  p {
    margin: 0;
    line-height: 2em;
  }
  li {
    margin-bottom: 0.5em;
  }
`}
`;

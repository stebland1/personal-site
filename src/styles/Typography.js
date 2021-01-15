import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Cosi Azure';
    src: url('../assets/fonts/CosiAzure-Bold.otf');
  }

  @font-face {
    font-family: 'Sporting Grotesque';
    src: url('../assets/fonts/SportingGrotesque-Regular.otf');
  }

  body {
    font-family: 'Sporting Grotesque';
    text-transform: lowercase;
  }

  h1 {
    font-family: 'Cosi Azure', sans-serif;
    color: var(--white);
    margin: 0;
    font-size: 8rem;
  }

  p {
    color: var(--white);
    line-height: 1.2;
  }
`;

export default Typography;

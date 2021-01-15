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
`;

export default Typography;

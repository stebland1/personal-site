import React from 'react';

// Components
import Header from './Header';
import Footer from './Footer';
import Bg from '../components/Bg';

// Styles
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import styled from 'styled-components';

const MainStyled = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 50px;
  height: calc(100vh - 100px);
  padding: 0 7rem;
`;

const Layout = ({ children }) => (
  <>
    <Bg />
    <GlobalStyles />
    <Typography />
    <Header />
    <MainStyled>{children}</MainStyled>
    <Footer />
  </>
);

export default Layout;

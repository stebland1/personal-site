import React from 'react';

// Components
import Header from './Header';
import Footer from './Footer';

// Styles
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import styled from 'styled-components';

const MainStyled = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Header />
    <MainStyled>{children}</MainStyled>
    <Footer />
  </>
);

export default Layout;

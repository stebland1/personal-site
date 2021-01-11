import React from 'react';

// Components
import Nav from './Nav';
import Footer from './Footer';

// Styles
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import 'normalize.css';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;

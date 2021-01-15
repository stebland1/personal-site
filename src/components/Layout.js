import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

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

const StyledCursor = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: var(--gold);
  mix-blend-mode: difference;
`;

const Layout = ({ children }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <StyledCursor
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <Bg />
      <GlobalStyles />
      <Typography />
      <Header />
      <MainStyled>{children}</MainStyled>
      <Footer />
    </>
  );
};

export default Layout;

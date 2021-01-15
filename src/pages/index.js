import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FaPaperPlane } from 'react-icons/fa';

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 0.8;
  text-align: center;
  height: 100%;
`;

const StyledH1 = styled(motion.h1)`
  font-family: 'Cosi Azure', sans-serif;
  font-size: 7rem;
  color: var(--white);
  margin: 0;
  line-height: 1;
  z-index: 1;
`;

const StyledSlogan = styled.p`
  font-size: 1rem;
  color: var(--white);
`;

const StyledContact = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: var(--silver);
  border-radius: 50%;
`;

const StyledSpan = styled(motion.span)`
  display: block;
`;

const h1Variants = {
  stateA: {
    opacity: 0,
    x: -200,
  },
  stateB: {
    opacity: 1,
    x: -150,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const h1Variants2 = {
  stateA: {
    opacity: 0,
    x: 200,
  },
  stateB: {
    opacity: 1,
    x: 50,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const Home = () => {
  return (
    <>
      <StyledHero>
        <StyledH1>
          <StyledSpan variants={h1Variants} initial="stateA" animate="stateB">
            CREATIVE
          </StyledSpan>
          <StyledSpan variants={h1Variants2} initial="stateA" animate="stateB">
            DEVELOPER
          </StyledSpan>
        </StyledH1>
        {/* <StyledSlogan>~ innovative & bespoke web solutions ~</StyledSlogan> */}
        {/* <StyledContact>
          <FaPaperPlane size={20} />
        </StyledContact> */}
      </StyledHero>
    </>
  );
};

export default Home;

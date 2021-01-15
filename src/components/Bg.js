import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styles
const StyledBg = styled.svg`
  position: absolute;
  height: 100vh;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: center;
  z-index: -1;
`;

// Transitions
const spaceVariants = {
  stateA: {
    d: `M782.89-1S692.28,179.41,681.41,280.89
        s-67.06,227.85-116,327.52c-37,96-25.37,103.05-79.74,181
        s-52.37,90.35-58,157.54l-36.24,33.47L358.83,957.7
        s-19.64-39.58-26.58-58.31-65.55-76.12-75.82-106.62-25.37-79.75-29-99.68
        c-64.35-150.87-112.28-149.42-129.58-327C47.12,203,119.61,263,0,0`,
    opacity: 0,
  },
  stateB: {
    d: `M 722 -2 S 679 168 681.41 280.89 
      s -93.41 95.11 -116 327.52 
      c -37 96 -79.41 124.59 -79.74 181 
      s -52.37 90.35 -58 157.54 
      l -36.24 33.47 L 358.83 957.7 
      s -19.64 -39.58 -26.58 -58.31 
      s -21.25 -50.39 -75.82 -106.62 
      s -25.37 -79.75 -36.43 -137.77 
      c -30 -255 -112.28 -149.42 -119.43 -375.09 
      C 45 158 93 218 55 -2`,
    opacity: 1,
    transition: {
      d: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 6,
      },
      opacity: { duration: 1, delay: 1.25 },
    },
  },
};

const personVariants = {
  stateA: {
    opacity: 0,
  },
  stateB: {
    opacity: 1,
    transition: { duration: 1, delay: 1 },
  },
};

const Bg = () => {
  return (
    <StyledBg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 782.89 1080">
      <g id="space">
        <linearGradient
          id="linear-gradient"
          x1="113.12"
          y1="537.88"
          x2="852.68"
          y2="110.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fcc84d" />
          <stop offset="1" stopColor="#f9982a" />
        </linearGradient>
        <motion.path
          variants={spaceVariants}
          initial="stateA"
          animate="stateB"
          class="cls-1"
          style={{ fill: 'url(#linear-gradient)' }}
        />
      </g>
      <motion.g
        id="person"
        variants={personVariants}
        initial="stateA"
        animate="stateB"
      >
        <path
          class="cls-2"
          fill="#E6E6E6"
          d="M539.45,1079s-6.72-70.58-57.44-81.58c-31.17-19.55-50.17-28.1-53.83-56.82-23.83,1.23-14.61,9.31-36.61,14,0,0-11,3.67-33.5,1.53,14.06,35.44,19.43,22.65,24.95,35.29,0,0-45.14,7.94-50.11,87.53"
        />
        <path
          class="cls-3"
          opacity="0.2"
          d="M390.67,987.56c0,4.4,3.94,2.32-7.65,3.91,0,0,.31-2.47-7.95-8.31,0,0,14.48.33,20.35-1.08C401.12,980.71,390.67,985.85,390.67,987.56Z"
        />
        <path
          class="cls-3"
          opacity="0.6"
          d="M371.48,1079.5c-5.87,0,1.3-27.5,1.3-29.5"
        />
        <line class="cls-3" x1="469.08" y1="1008.47" x2="476.53" y2="1001.79" />
        <g class="cls-4">
          <path d="M394.42,982.08a64.07,64.07,0,0,1-9.63,1.5c-1.62.13-3.24.22-4.87.22-.82,0-1.64,0-2.45-.1-.41-.05-.82-.08-1.22-.16l-.61-.13c-.2-.07-.39-.17-.57-.25a8.05,8.05,0,0,0,2.4.05l2.41-.19,4.83-.43C387.93,982.33,391.15,982.08,394.42,982.08Z" />
        </g>
        <g class="cls-4">
          <path
            class="cls-5"
            fill="#3d3d3d"
            d="M367.79,1080.32c0-2.69.26-5.22.54-7.8s.68-5.1,1.13-7.63,1-5,1.57-7.52,1.26-5,2-7.41c-.46,2.51-.89,5-1.22,7.55s-.61,5-.83,7.58-.32,5.06-.36,7.58a74.13,74.13,0,0,0,.2,7.49Z"
          />
        </g>
        <g class="cls-4">
          <path
            class="cls-5"
            fill="#3d3d3d"
            d="M489.06,1049.57c.55,2.63.88,5.15,1.16,7.73s.45,5.13.57,7.69.15,5.13.1,7.69-.15,5.11-.3,7.66c-.1-2.55-.23-5.1-.45-7.64s-.51-5.06-.85-7.57-.78-5-1.29-7.48-1.11-5-1.83-7.27Z"
          />
        </g>
        <g class="cls-4">
          <path
            class="cls-5"
            fill="#3d3d3d"
            d="M463.67,1010.19a15.32,15.32,0,0,1,4.14-6,19.79,19.79,0,0,1,6.29-4,21.8,21.8,0,0,1,7.28-1.42,10.27,10.27,0,0,1,1.84,0l1.83.15a34.68,34.68,0,0,1,3.56.8c-1.22.12-2.41.1-3.59.18l-1.76.18-.88.07c-.29,0-.58.1-.86.14-.58.11-1.15.2-1.73.28s-1.12.28-1.68.42l-.84.19c-.28.08-.55.18-.82.27-.54.19-1.09.35-1.62.57a26.6,26.6,0,0,0-6,3.3A27.55,27.55,0,0,0,463.67,1010.19Z"
          />
        </g>
      </motion.g>
    </StyledBg>
  );
};

export default Bg;

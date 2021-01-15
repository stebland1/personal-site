import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const StyledCopyright = styled.span`
  color: var(--light-grey);
  font-family: 'Cosi Azure';
`;

const StyledUl = styled.ul`
  width: 100px;
`;

const StyledLink = styled.a`
  color: var(--light-grey);
`;

const Footer = () => {
  return (
    <footer>
      <StyledCopyright>&#169; 2020</StyledCopyright>
      <StyledUl>
        <li>
          <StyledLink href="https://github.com/stebland1">
            <FaGithub size={20} />
          </StyledLink>
        </li>
        <li>
          <StyledLink href="https://www.facebook.com/">
            <FaFacebook size={20} />
          </StyledLink>
        </li>
        <li>
          <StyledLink href="https://www.instagram.com/stebland1/">
            <FaInstagram size={20} />
          </StyledLink>
        </li>
      </StyledUl>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledUl = styled.ul`
  width: 200px;
`;

const Header = () => {
  return (
    <header>
      <span>
        <Link to="/">
          <span data-hover="Stephen Bland">Stephen Bland</span>
        </Link>
      </span>
      <StyledUl>
        <li>
          <Link to="/" activeClassName="active">
            <span data-hover="Home">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            <span data-hover="About">About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            <span data-hover="Contact">Contact</span>
          </Link>
        </li>
      </StyledUl>
    </header>
  );
};

export default Header;

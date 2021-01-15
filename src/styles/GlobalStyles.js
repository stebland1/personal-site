import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --silver: #dddddd;
    --white: #ffffff;
    --gold: #F9982A;
    --black: #222222;
    --light-grey: #ACACAC;
    --blue: #0531AB;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: var(--black);
    font-size: 12px;
  }

	a {
		overflow: hidden;
		color: #797878;
		font-weight: 400;
    display: inline-block;
		 span {
			position: relative;
			display: inline-block;
			transition: .3s;
      z-index: 11;
			&::before {
				color: var(--white);
				position: absolute;
				top: 110%;
				content: attr(data-hover);
				font-weight: 800;
				transform: translate3d(0,0,0);
			}
		}
		&:hover {
			span {
				transform: translateY(-110%);
			}
		}
    &.active {
      color: var(--gold);
    }
	}

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  header, 
  footer {
    position: fixed;
    padding: 0 2rem;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header {
    top: 0;
  }

  footer {
    bottom: 0;
  }

  .footer-icon {
    color: var(----light-grey);
    &:hover {
      color: var(--black);
    }
  }
`;

export default GlobalStyles;

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Link } from "gatsby";
import SEO from "./SEO";
import theme from "../../config/theme";
import logo from "../logo.png";
import useBuildTime from "../hooks/useBuildTime";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  ::selection {
    color: ${props => props.theme.colors.bg};
    background: ${props => props.theme.colors.primary};
  }

  #___gatsby {
    height: inherit;
  }

  div[role="group"][tabindex] {
    height: inherit;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  }
  #header {
    background: transparent;
  }
  html {
    font-family: ${props => props.theme.fontFamily.sansSerif};
    font-size: ${props => props.theme.baseFontSize};
    height: 100%;
    overflow: hidden;
    h1 {
      font-size: 3.052rem;
    }
    h2 {
      font-size: 2.441rem;
    }
    h3 {
      font-size: 1.953rem;
    }
    h4 {
      font-size: 1.563rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 16px;
      h1 {
        font-size: 2.488rem;
      }
      h2 {
        font-size: 2.074rem;
      }
      h3 {
        font-size: 1.728rem;
      }
      h4 {
        font-size: 1.444rem;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }
  body {
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.grey.default};
    height: 100%;
  }
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: all ${props => props.theme.transitions.normal};
  }
  a:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.grey.dark};
    font-family: ${props => props.theme.fontFamily.serif};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${props => props.theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${props => props.theme.colors.grey.dark};
  }
  input, textarea, button   font-size: 1rem;
  }
  textarea {
    font-family: ${props => props.theme.fontFamily.sansSerif};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .4rem 1rem;
    &:focus {
      outline: none;
    }
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${props => props.theme.colors.bg};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${props => props.theme.colors.color};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }
  button:focus { outline: none; }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 10px;
  background-color: black;
`;

const NavButton = styled.button`
  color: white;
  background: none;
  border: none;
  padding: 20px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  text-align: center;
  color: white;
  padding: 10px;
  width: 100%;
  span {
    font-size: 0.75rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Layout = ({ children, customSEO }) => {
  const buildTime = useBuildTime();

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        {!customSEO && <SEO buildTime={buildTime} />}
        <GlobalStyle />
        <Header id="header">
          <Link to="/">
            <LinkContainer>
              <NavButton>
                <img alt="logo" src={logo} height={40} />
              </NavButton>
              <NavButton>Danny Phillips</NavButton>
            </LinkContainer>
          </Link>
          <LinkContainer>
            <Link to="/about">
              <NavButton>About</NavButton>
            </Link>
            <Link to="/experience">
              <NavButton>Experience</NavButton>
            </Link>
            <Link to="/projects">
              <NavButton>Projects</NavButton>
            </Link>
            <Link to="/blog">
              <NavButton>Blog</NavButton>
            </Link>
          </LinkContainer>
        </Header>
        {children}
        <Footer>
          <span>&copy; 2019 by Danny Phillips. All rights reserved.</span>
        </Footer>
      </Fragment>
    </ThemeProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool
};

Layout.defaultProps = {
  customSEO: false
};

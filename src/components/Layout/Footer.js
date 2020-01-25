import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  color: ${props => (props.home ? "white" : "black")};
  padding: 10px;
  width: 100%;
  span {
    font-size: 0.75rem;
  }
  ${props =>
    props.home &&
    `
    position: fixed;
    bottom: 0;
  `}
`;

const Footer = (props) => { debugger; return <StyledFooter {...props}>{props.children}</StyledFooter>};

export default Footer;

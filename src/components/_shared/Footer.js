import React from "react"
import styled from 'styled-components'

const Foot = styled.footer`
  text-align: center;
  color: black;
  padding: 10px;
  width: 100%;
  span {
    font-size: 0.75rem;
  }
`;

const Footer = ({ buildTime }) => (
  <Foot>
    <span>&copy; 2019 by Danny Phillips. All rights reserved.</span>
    <span> [Last build: {buildTime}]</span>
  </Foot>
);

export default Footer

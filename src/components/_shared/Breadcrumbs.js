import React from 'react'
import styled from "styled-components";

import bg from '../../assets/exp-bg-small.jpg'

const CoverPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  font-weight: bold;
  color: black;
  background: url(${bg}) center;
  background-size: cover;
  width: 100%;
  height: 250px;
  object-fit: cover;
  @media only screen and (max-width: 1169px) {
    font-size: 48px;
    height: 150px;
  }
`;

const Cover = ({children, ...rest}) => (
  <CoverPhoto {...rest}>{children}</CoverPhoto>
)

export default Cover

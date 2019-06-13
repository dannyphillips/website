import React from "react";
import styled from "styled-components";

import { Flex } from "../../components";

const LinkContainer = styled(Flex)`
  margin: 20px auto;
  width: 300px;
`;

const SocialLinks = () => (
  <LinkContainer justify="space-evenly">
    <a href="https://www.linkedin.com/in/dannyphillips1/">
      <img
        height="32"
        width="32"
        src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg"
      />
    </a>
    <a href="mailto:danny.phillips8@gmail.com">
      <img
        height="32"
        width="32"
        src="https://unpkg.com/simple-icons@latest/icons/gmail.svg"
      />
    </a>
    <a href="https://github.com/dannyphillips">
      <img
        height="32"
        width="32"
        src="https://unpkg.com/simple-icons@latest/icons/github.svg"
      />
    </a>
    <a href="https://twitter.com/_dannyjphillips">
      <img
        height="32"
        width="32"
        src="https://unpkg.com/simple-icons@latest/icons/twitter.svg"
      />
    </a>
    <a href="">
      <img
        height="28"
        width="28"
        src="https://unpkg.com/simple-icons@latest/icons/rss.svg"
      />
    </a>
  </LinkContainer>
);

export default SocialLinks;

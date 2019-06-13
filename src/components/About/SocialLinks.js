import React from "react";
import styled from "styled-components";

import { Flex } from "../../components";

const LinkContainer = styled(Flex)`
  margin: 20px auto;
  width: 300px;
`;

const Icon = styled.img`
  height: 32px;
  width: 32px;
`;

const SocialLinks = () => (
  <LinkContainer justify="space-evenly">
    <a href="https://www.linkedin.com/in/dannyphillips1/">
      <Icon alt="linkedin" src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg" />
    </a>
    <a href="mailto:danny.phillips8@gmail.com">
      <Icon alt="gmail" src="https://unpkg.com/simple-icons@latest/icons/gmail.svg" />
    </a>
    <a href="https://github.com/dannyphillips">
      <Icon alt="github" src="https://unpkg.com/simple-icons@latest/icons/github.svg" />
    </a>
    <a href="https://twitter.com/_dannyjphillips">
      <Icon alt="twitter" src="https://unpkg.com/simple-icons@latest/icons/twitter.svg" />
    </a>
    <a href="/">
      <Icon
        height="28"
        width="28"
        alt="rss" src="https://unpkg.com/simple-icons@latest/icons/rss.svg"
      />
    </a>
  </LinkContainer>
);

export default SocialLinks;

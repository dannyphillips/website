import React from "react";
import { Card } from "@material-ui/core";
import { Flex } from "../../components";
import styled from "styled-components";
import Skill from './Skill'

const Title = styled.p`
  font-size: 18px;
`;

const Container = styled.div`
  padding: 20px;
  margin: 10px;
  border: 2px solid black;
  > * {
    margin: 5px;
  }
`;
const List = styled(Card)`
  padding: 20px;
`;

const Icon = styled.img`
  height: 32px;
  width: 32px;
`;

const SkillsList = () => (
  <Flex className="container">
    <h3>My Skills</h3>
    <List>
      <Title>Frontend</Title>
      <Container>
        <Skill icon="react" link="react" />
        <Skill icon="css3" link="css3" />
        <Skill icon="jest" link="jest" />
        <Skill icon="typescript" link="typescript" />
        <Skill icon="graphql" link="graphql" />
        <Skill icon="webpack" link="webpack" />
        <Skill icon="yarn" link="yarn" />
        <Skill icon="npm" link="npm" />
      </Container>
      <Title>Backend</Title>
      <Container>
        <Skill icon="postgresql" link="postgresql" />
        <Skill icon="ruby" link="ruby" />
        <Skill icon="rails" link="rails" />
        <Skill icon="node-dot-js" link="node-dot-js" />
        <Skill logo="postgresql" link="postgresql" />
      </Container>
      <Title>DevOps</Title>
      <Container>
        <Skill icon="firebase" link="firebase" />
        <Skill icon="heroku" link="heroku" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/amazonaws.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/next-dot-js.svg" />
      </Container>
      <Title>Business Tools</Title>
      <Container>
        <Icon src="https://unpkg.com/simple-icons@latest/icons/visualstudiocode.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/circleci.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/travisci.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/codeclimate.svg" />
        {/* <Icon src="https://unpkg.com/simple-icons@latest/icons/sketch.svg" /> */}
        <Icon src="https://unpkg.com/simple-icons@latest/icons/slack.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/jira.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/figma.svg" />
      </Container>
      <Title>APIs & Services</Title>
      <Container>
        <Icon src="https://unpkg.com/simple-icons@latest/icons/zapier.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/google.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/facebook.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/twitter.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/stripe.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/instagram.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/goodreads.svg" />
      </Container>
    </List>
  </Flex>
);

export default SkillsList;

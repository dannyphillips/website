import React from "react";
import { Card } from "@material-ui/core";
import { Flex } from "../../components";
import styled from "styled-components";

const Title = styled.h4``;

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

const Skills = () => (
  <Flex>
    <h3>My Skills</h3>
    <List>
      <Title>Frontend</Title>
      <Container>
        <Icon src="https://unpkg.com/simple-icons@latest/icons/react.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/css3.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/jest.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/typescript.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/graphql.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/webpack.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/yarn.svg" />
      </Container>
      <Title>Backend</Title>
      <Container>
        <Icon src="https://unpkg.com/simple-icons@latest/icons/postgresql.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/ruby.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/rails.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/node-dot-js.svg" />
      </Container>
      <Title>DevOps</Title>
      <Container>
        <Icon src="https://unpkg.com/simple-icons@latest/icons/firebase.svg" />
        <Icon src="https://unpkg.com/simple-icons@latest/icons/heroku.svg" />
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

export default Skills;

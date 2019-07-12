import React from "react";
import { Layout, Flex } from "../components";
import styled from "styled-components";

const Message = styled.div``;

const NotFound = () => (
  <Layout>
    <Flex>
      <Message>Not Found</Message>
    </Flex>
  </Layout>
);

export default NotFound;

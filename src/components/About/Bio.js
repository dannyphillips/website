import React from "react";
import { Card } from "@material-ui/core";
import { Flex } from ".."

import "./Bio.css";

const Bio = () => (
  <Flex className="container">
    <h3>My Bio</h3>
    <Card className="list">
      Insert Bio Here
    </Card>
  </Flex>
);

export default Bio;

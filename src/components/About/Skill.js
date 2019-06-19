import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Icon = styled.img`
  height: 32px;
  width: 32px;
`;

const Skill = ({ icon, logo, link }) => (
  <Link to={`techs/${link}`}>
    {icon && (
      <Icon
        alt={link}
        src={`https://unpkg.com/simple-icons@latest/icons/${icon}.svg`}
      />
    )}
    {logo && <Icon alt={link} src={`https://logo.clearbit.com/${logo}.com`} />}
  </Link>
);

export default Skill;

import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  justify-content: ${props => (props.justify ? props.justify : "center")};
  align-items: ${props => (props.align ? props.align : "center")};
`;

import React from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${({ isBlack }) => {
    return isBlack ? "black" : "green";
  }};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;

export default function BoxWithStyledComponent(props) {
  return <Box {...props}></Box>;
}

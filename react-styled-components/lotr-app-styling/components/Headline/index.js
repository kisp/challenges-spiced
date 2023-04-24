import React from "react";

import styled from "styled-components";

import { headline1, headline2 } from "../../style-mixins/text-styles";

const H1 = styled.h1`
  ${headline1}
`;
const H2 = styled.h2`
  ${headline2}
`;

export default function Headline({ children, as = "h1" }) {
  if (as === "h1") return <H1>{children}</H1>;
  if (as === "h2") return <H2>{children}</H2>;
  throw new Error(`what to do with ${as}?`);
}

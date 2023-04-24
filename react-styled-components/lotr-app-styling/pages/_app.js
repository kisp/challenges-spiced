import { GlobalStyle } from "../styles";
import { Lora } from "next/font/google";
import styled from "styled-components";
import { body } from "../style-mixins/text-styles";

const font = Lora({ subsets: ["latin"] });

const StyledDiv = styled.div`
  ${body}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledDiv className={`${font.className}`}>
        <Component {...pageProps} />
      </StyledDiv>
    </>
  );
}

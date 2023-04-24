import Link from "next/link";

import styled from "styled-components";

import {
  headline1,
  headline2,
  title,
  caption,
  captionItalic,
  body,
} from "../style-mixins/text-styles";

const Headline1 = styled.div`
  ${headline1}
`;

const Headline2 = styled.div`
  ${headline2}
`;

const Title = styled.div`
  ${title}
`;

const Caption = styled.div`
  ${caption};
`;

const CaptionItalic = styled.div`
  ${captionItalic};
`;

const Body = styled.div`
  ${body};
`;

export default function HomePage() {
  return (
    <div>
      <Link href="/volumes">Go to all volumes</Link>
      <div>
        <Headline1>Headline 1</Headline1>
        <Headline2>Headline 2</Headline2>
        <Title>Title</Title>
        <Caption>Caption</Caption>
        <CaptionItalic>Caption Italic</CaptionItalic>
        <Body>Body</Body>
      </div>
    </div>
  );
}

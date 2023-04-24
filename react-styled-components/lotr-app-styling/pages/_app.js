import { GlobalStyle } from "../styles";

import { Lora } from "next/font/google";

const font = Lora({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <div className={`myclass ${font.className}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

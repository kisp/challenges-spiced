import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-earth: #282828;
    --color-clouds: #f1f1f1;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
    color: var(--color-earth);
    background-color: var(--color-clouds);
  }
`;

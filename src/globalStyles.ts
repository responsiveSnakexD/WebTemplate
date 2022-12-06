import { createGlobalStyle } from "styled-components";
import { ColorType } from "../theme/colors";
import { applyColor } from "./mixins";

const GlobalStyle = createGlobalStyle`
  html {
    max-width: 70ch;
    padding: 3em 1em;
    margin: auto;
    line-height: 1.75;
    font-size: 1.25em;
  }

  body {
    ${({ theme }) => applyColor({ theme, color: ColorType.Background })}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 3em 0 1em;
  }
  p,
  ul,
  ol {
    margin-bottom: 2em;
    list-style: none;
    font-family: sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  footer {
    margin-top: 3em;
    padding-top: 3em;
    border-top: 1px solid #eaeaea;
    font-family: sans-serif;
  }

`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 20px;
  background: ${(bg) => bg.theme.pageBackground};
  color: ${(bg) => bg.theme.fontColor};
  font-weight:500;
  font-family: "Roboto Condensed", sans-serif;
  
}
 `;

export default GlobalStyles;

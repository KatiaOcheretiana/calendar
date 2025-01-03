import { createRoot } from "react-dom/client";

import { StrictMode } from "react";

import { App } from "./components/App";
import { GlobalStyle } from "./styles/GlobalStyle";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>,
);

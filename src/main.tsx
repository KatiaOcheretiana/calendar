import { createRoot } from "react-dom/client";

import { StrictMode } from "react";

import { CalendarProvider } from "./CalendarContext";
import { App } from "./components/App";
import { GlobalStyle } from "./styles/GlobalStyle";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CalendarProvider>
      <App />
    </CalendarProvider>
    <GlobalStyle />
  </StrictMode>,
);

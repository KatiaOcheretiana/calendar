import { createRoot } from "react-dom/client";

import { StrictMode } from "react";
import styled from "styled-components";
import { ModalProvider } from "styled-react-modal";

import { App } from "./components/App";
import { GlobalStyle } from "./styles/GlobalStyle";

const SpecialModalBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  width: 80%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider backgroundComponent={SpecialModalBackground}>
      <App />
    </ModalProvider>{" "}
    <GlobalStyle />
  </StrictMode>,
);

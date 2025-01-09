import styled from "styled-components";

interface FridWrapperProps {
  $isHeader?: boolean;
}

export const GridWrapper = styled.ul<FridWrapperProps>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style: none;
  height: ${(props) => (props.$isHeader ? "24px" : "80vh")};
  width: 100vw;
  grid-gap: 2px;
  background-color: ${(props) =>
    props.$isHeader ? " rgb(236, 237, 237)" : "white"};
  ${(props) => props.$isHeader && "border-bottom: 1px solid white"}
`;

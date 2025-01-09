import styled from "styled-components";

interface CellWrapperProps {
  $isHeader?: boolean;
  $selectedMonth?: boolean;
}

export const CellWrapper = styled.li<CellWrapperProps>`
  height: ${(props) => (props.$isHeader ? "24px" : "100%")};
  min-width: 148px;
  background-color: ${(props) =>
    props.$isHeader ? "transparent" : " rgba(199, 202, 208, 0.5)"};

  background-color: ${(props) =>
    props.$selectedMonth && "rgba(195, 201, 211, 0.9)"};

  padding-bottom: 5px;
`;

interface RowInCellProps {
  $justifyContent?: string;
  $pr?: number;
}

export const RowInCell = styled.div<RowInCellProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : "flex-start"};
  ${(props) => props.$pr && `padding-right: ${props.$pr * 8}px`}
`;

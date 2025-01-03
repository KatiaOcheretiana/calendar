import styled from "styled-components";

export const GridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  list-style: none;
  width: 100%;
  grid-gap: 1px;
  background-color: #484040;
`;

interface SellWrapperProps {
  $isWeekend: boolean;
}
export const SellWrapper = styled.li<SellWrapperProps>`
  min-height: 80px;
  min-width: 148px;
  color: #ddcddd;
  background-color: ${(props) => (props.$isWeekend ? "#272829" : " #1e1f21")};
`;

interface RowInCellProps {
  $justifyContent?: string;
}

export const RowInCell = styled.div<RowInCellProps>`
  display: flex;
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : "flex-start"};
`;

export const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

import styled from "styled-components";

export const WeekDaysList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(236, 237, 237);

  padding: 5px 0;

  color: gray;
  font-weight: 500;

  margin-bottom: 3px;
`;

export const GridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  list-style: none;
  height: 80vh;
  grid-gap: 3px;
  background-color: white;
`;

export const SellWrapper = styled.li`
  min-height: 80px;
  min-width: 148px;
  background-color: rgba(211, 214, 219, 0.65);
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
  margin: 2px;
`;

export const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  background-color: #7aa5d2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

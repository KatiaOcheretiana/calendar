import styled from "styled-components";

export const WeekDaysList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(236, 237, 237);

  padding: 5px 0;
  width: 100vw;

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
  width: 100vw;
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
  height: 28px;
  width: 28px;
  font-size: 14px;
  font-weight: 600;
  flex-wrap: wrap;
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

export const HolidayList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  overflow-y: auto;
  height: 70px;
  margin-right: 10px;

  &::-webkit-scrollbar {
    padding-left: 50px;
    width: 4px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(93, 137, 220);
    border-radius: 4px;

    &::-webkit-scrollbar-thumb:hover {
      background: rgb(115, 130, 241);
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 2px;
    }
  }
`;

export const HolidayItem = styled.li`
  background-color: rgba(249, 108, 0, 0.51);
  padding: 2px 5px;
  font-weight: 500;
  font-size: 12px;
`;

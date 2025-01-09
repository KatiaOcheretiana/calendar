import styled from "styled-components";

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface DayWrapperProps {
  $selectedMonth?: boolean;
}

export const DayWrapper = styled.div<DayWrapperProps>`
  height: 28px;
  width: 28px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.$selectedMonth ? "black" : "rgb(164, 169, 175)")};

  flex-wrap: wrap;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 2px;

  cursor: pointer;
`;

export const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(252, 252, 252);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListTitle = styled.h2`
  padding-left: 10px;
  font-size: 14px;
  font-weight: 600;
`;

export const HolidayList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style-position: inside;
  overflow-y: auto;
  height: 40px;
  margin-right: 10px;
`;

export const HolidayItem = styled.li`
  background-color: rgba(252, 205, 16, 0.68);
  border-radius: 6px;
  padding: 4px;
  margin: 0 2px;
  font-weight: 500;
  font-size: 12px;
`;

export const TaskList = styled.ul`
  display: flex;
  list-style-position: inside;
  flex-direction: column;
  gap: 4px;
  padding-left: 4px;
  margin: unset;
  margin-right: 10px;
`;

export const TaskItemWrapper = styled.button`
  position: relative;
  left: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border: unset;
  background: unset;
  color: black;
  cursor: pointer;
  margin: 0;
  padding: 4px;
  text-align: left;
  background-color: white;
  border-radius: 6px;

  width: 95%;
`;

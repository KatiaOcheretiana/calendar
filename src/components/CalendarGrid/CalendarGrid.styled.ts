import styled from "styled-components";
import Modal from "styled-react-modal";

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

interface CellWrapperProps {
  $isHeader?: boolean;
  $selectedMonth?: boolean;
}

export const CellWrapper = styled.li<CellWrapperProps>`
  min-height: ${(props) => (props.$isHeader ? 24 : 80)}px;
  min-width: 148px;
  background-color: ${(props) =>
    props.$isHeader ? "transparent" : " rgba(199, 202, 208, 0.5)"};

  background-color: ${(props) =>
    props.$selectedMonth && "rgba(195, 201, 211, 0.9)"};
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

export const HolidayList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style-position: inside;
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
  background-color: rgba(252, 205, 16, 0.68);
  border-radius: 6px;
  padding: 4px;
  margin: 0 2px;
  font-weight: 500;
  font-size: 12px;
`;

export const StyledModal = Modal.styled`
 padding: 20px;

 display: flex;
 flex-direction: column;
 
 gap: 10px;
 `;

export const TaskList = styled.ul`
  display: flex;
  list-style-position: inside;
  flex-direction: column;
  gap: 4px;
  padding-left: 4px;
  margin: unset;
`;

export const TaskItemWrapper = styled.button`
  position: relative;
  left: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
  border: unset;
  background: unset;
  color: black;
  cursor: pointer;
  margin: 0;
  padding: 4px;
  text-align: left;
  background-color: white;
  border-radius: 6px;
`;

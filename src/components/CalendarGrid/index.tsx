import { useCalendarContext } from "../../CalendarContext";
import { CalendarHeader } from "../CalendarHeader";
import { MonthDaysList } from "../MonthDaysList";
import { GridWrapper } from "./CalendarGrid.styled";

const CalendarGrid = () => {
  const { tasks, filteredTasks } = useCalendarContext();

  return (
    <>
      <GridWrapper $isHeader>
        <CalendarHeader />
      </GridWrapper>
      <GridWrapper>
        <MonthDaysList
          tasks={filteredTasks.length !== 0 ? filteredTasks : tasks}
        />
      </GridWrapper>
    </>
  );
};

export { CalendarGrid };

import { Moment, unitOfTime } from "moment";

import { HolidayType } from "../../lib/services/holidaysService";
import { TaskType } from "../../lib/types/taskType";
import { CalendarHeader } from "../CalendarHeader";
import { MonthDaysList } from "../MonthDaysList";
import { GridWrapper } from "./CalendarGrid.styled";

interface CalendarGridPropsType {
  startDay: Moment;
  today: Moment;
  holidays: HolidayType[];
  tasks: TaskType[];
  openFormHandler: (date?: string, taskToUpdate?: TaskType) => void;
  setDisplayMode: (data: unitOfTime.DurationConstructor) => void;
}

const CalendarGrid = ({
  startDay,
  holidays,
  tasks,
  today,
  openFormHandler,
  setDisplayMode,
}: CalendarGridPropsType) => {
  return (
    <>
      <GridWrapper $isHeader>
        <CalendarHeader />
      </GridWrapper>
      <GridWrapper>
        <MonthDaysList
          startDay={startDay}
          openFormHandler={openFormHandler}
          holidays={holidays}
          tasks={tasks}
          today={today}
          setDisplayMode={setDisplayMode}
        />
      </GridWrapper>
    </>
  );
};

export { CalendarGrid };

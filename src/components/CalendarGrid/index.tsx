import { Moment } from "moment";

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
}

const CalendarGrid = ({
  startDay,
  holidays,
  tasks,
  today,
  openFormHandler,
}: CalendarGridPropsType) => {
  return (
    <div>
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
        />
      </GridWrapper>
    </div>
  );
};

export { CalendarGrid };

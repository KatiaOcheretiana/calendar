import { Moment } from "moment";

import { isDayContainCurrentTask } from "../../helpers";
import { HolidayType } from "../../lib/services/holidaysService";
import { TaskType } from "../../lib/types/taskType";
import { CalendarCell } from "../CalendarCell";

interface MonthDaysListPropsType {
  startDay: Moment;
  today: Moment;
  holidays: HolidayType[];
  tasks: TaskType[];
  openFormHandler: (date?: string, taskToUpdate?: TaskType) => void;
}

function MonthDaysList({
  startDay,
  holidays,
  tasks,
  today,
  openFormHandler,
}: MonthDaysListPropsType) {
  const totalDays = 42;
  const day = startDay.clone();
  const daysArray = Array.from({ length: totalDays }, () => {
    const newDay = day.add(1, "day").clone();
    return newDay.isValid() ? newDay : null;
  });

  return daysArray.map((dayItem) =>
    dayItem ? (
      <CalendarCell
        key={dayItem?.unix()}
        holidays={holidays}
        today={today}
        tasks={tasks.filter((task) => isDayContainCurrentTask(task, dayItem))}
        openFormHandler={openFormHandler}
        dayItem={dayItem}
      />
    ) : null,
  );
}

export { MonthDaysList };

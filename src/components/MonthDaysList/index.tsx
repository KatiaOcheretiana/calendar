import { Moment } from "moment";

import { useCalendarContext } from "../../CalendarContext";
import { isDayContainCurrentTask } from "../../helpers";
import { TaskType } from "../../lib/types/taskType";
import { CalendarCell } from "../CalendarCell";

function MonthDaysList({ tasks }: { tasks: TaskType[] }) {
  const { today } = useCalendarContext();

  const startDay: Moment = today.clone().startOf("month").startOf("week");

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
        tasks={tasks.filter((task) => isDayContainCurrentTask(task, dayItem))}
        dayItem={dayItem}
      />
    ) : null,
  );
}

export { MonthDaysList };

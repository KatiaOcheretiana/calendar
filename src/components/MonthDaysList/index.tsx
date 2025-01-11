import moment, { Moment } from "moment";
import { useState } from "react";

import { useCalendarContext } from "../../CalendarContext";
import { isDayContainCurrentTask } from "../../helpers";
import { TaskType } from "../../lib/types/taskType";
import { CalendarCell } from "../CalendarCell";

function MonthDaysList({ tasks }: { tasks: TaskType[] }) {
  const { today, handleSaveTask } = useCalendarContext();

  const startDay: Moment = today.clone().startOf("month").startOf("week");

  const totalDays = 42;
  const day = startDay.clone();
  const daysArray = Array.from({ length: totalDays }, () => {
    const newDay = day.add(1, "day").clone();
    return newDay.isValid() ? newDay : null;
  });

  const [droppedDay, setDroppedDay] = useState<Moment | null>(null);

  const onDropHandler = (
    e: React.DragEvent<HTMLLIElement>,
    dayItem: Moment,
  ) => {
    e.preventDefault();
    setDroppedDay(dayItem);
  };

  const onDragOverHandler = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const onDragEndHandler = (
    e: React.DragEvent<HTMLButtonElement>,
    task: TaskType,
  ) => {
    e.preventDefault();
    if (!droppedDay) return;

    const originalDate = moment.unix(+task.date);
    const updatedDate = droppedDay
      .clone()
      .set({
        hour: originalDate.hour(),
        minute: originalDate.minute(),
        second: originalDate.second(),
        millisecond: originalDate.millisecond(),
      })
      .unix();

    handleSaveTask({ ...task, date: String(updatedDate) });
  };

  return daysArray.map((dayItem) =>
    dayItem ? (
      <CalendarCell
        key={dayItem.unix()}
        tasks={tasks.filter((task) => isDayContainCurrentTask(task, dayItem))}
        dayItem={dayItem}
        onDropHandler={onDropHandler}
        onDragOver={onDragOverHandler}
        onDragEndHandler={onDragEndHandler}
      />
    ) : null,
  );
}

export { MonthDaysList };

import { Moment } from "moment";
import { useState } from "react";

import { CellWrapper, RowInCell } from "../../containers/StyledComponents";
import { isCurrentDay, isSelectedMonth } from "../../helpers";
import { HolidayType } from "../../lib/services/holidaysService";
import { TaskType } from "../../lib/types/taskType";
import {
  CurrentDay,
  DayWrapper,
  HolidayItem,
  HolidayList,
  ListTitle,
  ShowDayWrapper,
  TaskItemWrapper,
  TaskList,
} from "./CalendarCell.styled";

interface CalendarCellPropsType {
  dayItem: Moment;
  today: Moment;
  holidays: HolidayType[];
  tasks: TaskType[];
  openFormHandler: (date?: string, taskToUpdate?: TaskType) => void;
}

// Helper function to find holidays for a specific day
function getHolidaysForDay(
  day: Moment,
  holidays: HolidayType[],
): HolidayType[] {
  const formattedDay = day.format("YYYY-MM-DD");
  return holidays.filter((holiday) => holiday.date === formattedDay);
}

function CalendarCell({
  dayItem,
  holidays,
  tasks,
  today,
  openFormHandler,
}: CalendarCellPropsType) {
  const [showAllTasks, setShowAllTasks] = useState(false);

  const toggleShowAllTasks = () => {
    setShowAllTasks((prev) => !prev);
  };

  const holidaysForDay = getHolidaysForDay(dayItem, holidays);

  return (
    <CellWrapper $selectedMonth={isSelectedMonth(dayItem, today)}>
      <RowInCell $justifyContent="flex-end">
        <ShowDayWrapper>
          <DayWrapper
            $selectedMonth={isSelectedMonth(dayItem, today)}
            onDoubleClick={() => openFormHandler(String(dayItem?.unix()))}
          >
            {dayItem &&
              (isCurrentDay(dayItem) ? (
                <CurrentDay>{dayItem.format("D")}</CurrentDay>
              ) : (
                dayItem.format("D")
              ))}
          </DayWrapper>
        </ShowDayWrapper>
        {holidaysForDay.length > 0 && (
          <>
            <ListTitle>Holidays list</ListTitle>
            <HolidayList>
              {holidaysForDay.map((holiday, index) => (
                <HolidayItem key={index}>
                  {holiday.name} ({holiday.countryCode})
                </HolidayItem>
              ))}
            </HolidayList>
          </>
        )}
        {tasks.length > 0 && (
          <>
            <ListTitle>Tasks list</ListTitle>
            <TaskList>
              {(showAllTasks ? tasks : tasks.slice(0, 2))
                .sort((a, b) => Number(a.date) - Number(b.date))
                .map((task) => (
                  <li key={task.id}>
                    <TaskItemWrapper
                      onDoubleClick={() => openFormHandler(task.date, task)}
                    >
                      {task.title}
                    </TaskItemWrapper>
                  </li>
                ))}

              {tasks.length > 2 && (
                <TaskItemWrapper onClick={toggleShowAllTasks}>
                  {showAllTasks ? "Show less..." : "Show more..."}
                </TaskItemWrapper>
              )}
            </TaskList>
          </>
        )}
      </RowInCell>
    </CellWrapper>
  );
}

export { CalendarCell };

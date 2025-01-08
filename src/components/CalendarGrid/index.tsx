import moment, { Moment } from "moment";

import {
  isCurrentDay,
  isDayContainCurrentTask,
  isSelectedMonth,
} from "../../helpers";
import { HolidayType } from "../../lib/services/holidaysService";
import { TaskType } from "../../lib/types/taskType";
import {
  CellWrapper,
  CurrentDay,
  DayWrapper,
  GridWrapper,
  HolidayItem,
  HolidayList,
  RowInCell,
  ShowDayWrapper,
  TaskItemWrapper,
  TaskList,
} from "./CalendarGrid.styled";

interface CalendarGridPropsType {
  startDay: Moment;
  today: Moment;
  holidays: HolidayType[];
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  openFormHandler: (date?: string, taskToUpdate?: TaskType) => void;
}

const CalendarGrid = ({
  startDay,
  holidays,
  tasks,
  // setTasks,
  today,
  openFormHandler,
}: CalendarGridPropsType) => {
  const totalDays = 42;
  const day = startDay.clone();
  const daysArray = Array.from({ length: totalDays }, () => {
    const newDay = day.add(1, "day").clone();
    return newDay.isValid() ? newDay : null;
  });

  const isHoliday = (day: Moment) => {
    const formattedDay = day.format("YYYY-MM-DD");
    return holidays.some((holiday) => holiday.date === formattedDay);
  };

  return (
    <div>
      <GridWrapper $isHeader>
        {[...Array(7)].map((_, i) => (
          <CellWrapper $isHeader key={i}>
            <RowInCell $justifyContent="flex-end" $pr={1}>
              {moment()
                .day(i + 1)
                .format("ddd")}
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
      <GridWrapper>
        {daysArray.map(
          (dayItem) =>
            dayItem && (
              <CellWrapper
                key={dayItem?.unix()}
                $selectedMonth={isSelectedMonth(dayItem, today)}
              >
                <RowInCell $justifyContent="flex-end">
                  <ShowDayWrapper>
                    <DayWrapper
                      $selectedMonth={isSelectedMonth(dayItem, today)}
                      onDoubleClick={() =>
                        openFormHandler(String(dayItem?.unix()))
                      }
                    >
                      {dayItem &&
                        (isCurrentDay(dayItem) ? (
                          <CurrentDay>{dayItem.format("D")}</CurrentDay>
                        ) : (
                          dayItem.format("D")
                        ))}
                    </DayWrapper>
                  </ShowDayWrapper>
                  {dayItem && isHoliday(dayItem) && (
                    <HolidayList>
                      {holidays
                        .filter(
                          (holiday) =>
                            holiday.date === dayItem?.format("YYYY-MM-DD"),
                        )

                        .map((holiday, index) => (
                          <HolidayItem key={index}>
                            {holiday.name} ({holiday.countryCode})
                          </HolidayItem>
                        ))}
                    </HolidayList>
                  )}
                  {dayItem && (
                    <TaskList>
                      {tasks
                        .filter((task) =>
                          isDayContainCurrentTask(task, dayItem),
                        )

                        .sort((a, b) => Number(a.date) - Number(b.date))

                        .map((task) => (
                          <li key={task.id}>
                            <TaskItemWrapper
                              onDoubleClick={() =>
                                openFormHandler(task.date, task)
                              }
                            >
                              {task.title}
                            </TaskItemWrapper>
                          </li>
                        ))}
                    </TaskList>
                  )}
                </RowInCell>
              </CellWrapper>
            ),
        )}
      </GridWrapper>
    </div>
  );
};

export { CalendarGrid };

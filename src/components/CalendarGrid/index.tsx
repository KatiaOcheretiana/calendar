import moment, { Moment } from "moment";
import { useState } from "react";

import { HolidayType } from "../../lib/services/holidaysService";
import { TaskType } from "../../lib/types/taskType";
import TaskForm from "../TaskForm";
import {
  CellWrapper,
  CurrentDay,
  DayWrapper,
  GridWrapper,
  HolidayItem,
  HolidayList,
  RowInCell,
  ShowDayWrapper,
  StyledModal,
  TaskItemWrapper,
  TaskList,
} from "./CalendarGrid.styled";

interface CalendarGridPropsType {
  startDay: Moment;
  today: Moment;
  holidays: HolidayType[];
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

const CalendarGrid = ({
  startDay,
  holidays,
  tasks,
  setTasks,
  today,
}: CalendarGridPropsType) => {
  const totalDays = 42;
  const day = startDay.clone();
  const daysArray = Array.from({ length: totalDays }, () => {
    const newDay = day.add(1, "day").clone();
    return newDay.isValid() ? newDay : null;
  });

  const isCurrentDay = (day: Moment) => moment().isSame(day, "day");
  const isSelectedMonth = (day: Moment) => today.isSame(day, "month");

  const isHoliday = (day: Moment) => {
    const formattedDay = day.format("YYYY-MM-DD");
    return holidays.some((holiday) => holiday.date === formattedDay);
  };

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleCellClick = (day: Moment) => {
    setSelectedTask(null);
    setSelectedDay(day.format("YYYY-MM-DD"));
    toggleModal();
  };

  const handleTaskClick = (task: TaskType) => {
    setSelectedTask(task);
    setSelectedDay(null);
    toggleModal();
  };

  const handleSaveTask = (updatedTask: TaskType) => {
    setTasks((prev) => {
      const taskIndex = prev.findIndex((task) => task.id === updatedTask.id);
      if (taskIndex >= 0) {
        const updatedTasks = [...prev];
        updatedTasks[taskIndex] = updatedTask;
        return updatedTasks;
      } else {
        return [...prev, { ...updatedTask, id: prev.length + 1 }];
      }
    });

    toggleModal();
  };

  console.log(tasks);

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
                onClick={() => dayItem && handleCellClick(dayItem)}
                $selectedMonth={isSelectedMonth(dayItem)}
              >
                <RowInCell $justifyContent="flex-end">
                  <ShowDayWrapper>
                    <DayWrapper $selectedMonth={isSelectedMonth(dayItem)}>
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
                        .filter(
                          (task) =>
                            task.date >= dayItem.format("X") &&
                            task.date <=
                              dayItem.clone().endOf("day").format("X"),
                        )
                        .map((task) => (
                          <li key={task.id}>
                            <TaskItemWrapper
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTaskClick(task);
                              }}
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

      {isOpen && (
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <TaskForm
            task={selectedTask}
            defaultDay={selectedDay ?? undefined}
            onSave={handleSaveTask}
            onCancel={toggleModal}
          />
        </StyledModal>
      )}
    </div>
  );
};

export { CalendarGrid };

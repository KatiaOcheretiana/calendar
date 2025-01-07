import moment, { Moment } from "moment";
import { useState } from "react";

import { HolidayType } from "../../lib/services/holidaysService";
import TaskForm from "../TaskForm";
import {
  CurrentDay,
  DayWrapper,
  GridWrapper,
  HolidayItem,
  HolidayList,
  RowInCell,
  SellWrapper,
  StyledModal,
  Task,
  TaskList,
  WeekDaysList,
} from "./CalendarGrid.styled";

interface TaskType {
  id: number;
  description: string;
  day: string;
}

interface CalendarGridPropsType {
  startDay: Moment;
  holidays: HolidayType[];
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

const CalendarGrid = ({
  startDay,
  holidays,
  tasks,
  setTasks,
}: CalendarGridPropsType) => {
  const totalDays = 42;
  const day = startDay.clone();
  const daysArray = Array.from({ length: totalDays }, () => {
    const newDay = day.add(1, "day").clone();
    return newDay.isValid() ? newDay : null;
  });

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const isCurrentDay = (day: Moment) => moment().isSame(day, "day");

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

  return (
    <div>
      <WeekDaysList>
        {weekDays.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </WeekDaysList>
      <GridWrapper>
        {daysArray.map((dayItem) => (
          <SellWrapper
            key={dayItem?.unix()}
            onDoubleClick={() => dayItem && handleCellClick(dayItem)}
          >
            <RowInCell $justifyContent="flex-end">
              <DayWrapper>
                {dayItem &&
                  (isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format("D")}</CurrentDay>
                  ) : (
                    dayItem.format("D")
                  ))}
              </DayWrapper>
            </RowInCell>
            {dayItem && isHoliday(dayItem) && (
              <HolidayList>
                {holidays
                  .filter(
                    (holiday) => holiday.date === dayItem?.format("YYYY-MM-DD"),
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
                  .filter((task) => task.day === dayItem.format("YYYY-MM-DD"))
                  .map((task) => (
                    <Task
                      key={task.id}
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                        handleTaskClick(task);
                      }}
                    >
                      {task.description}
                    </Task>
                  ))}
              </TaskList>
            )}
          </SellWrapper>
        ))}
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

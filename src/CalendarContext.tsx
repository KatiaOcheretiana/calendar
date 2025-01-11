import moment, { Moment, unitOfTime } from "moment";
import React, { createContext, useCallback, useContext, useState } from "react";

import { DISPLAY_MODE_MONTH } from "./helpers/constants";
import { HolidayType } from "./lib/services/holidaysService";
import { TaskType } from "./lib/types/taskType";

interface CalendarContextType {
  today: Moment;
  tasks: TaskType[];
  holidays: HolidayType[];
  filteredTasks: TaskType[];
  displayMode: unitOfTime.DurationConstructor;
  setDisplayMode: React.Dispatch<
    React.SetStateAction<unitOfTime.DurationConstructor>
  >;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleCurrentMonth: () => void;
  filterTasks: (searchText: string) => void;
  clearFilter: () => void;
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  setHolidays: React.Dispatch<React.SetStateAction<HolidayType[]>>;
  setSelectedDay: (data: string) => void;
  closeModal: () => void;
  openFormHandler: (date?: string, taskToUpdate?: TaskType) => void;
  handleSaveTask: (updatedTask: TaskType) => void;
  setSelectedTask: (task: TaskType) => void;
  isOpen: boolean;
  selectedTask: TaskType | null;
  selectedDay: string | null;
}

const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined,
);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [displayMode, setDisplayMode] =
    useState<unitOfTime.DurationConstructor>(DISPLAY_MODE_MONTH);

  const [today, setToday] = useState(moment());
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [holidays, setHolidays] = useState<HolidayType[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const handlePrevMonth = useCallback(() => {
    setToday((prev) => prev.clone().subtract(1, displayMode));
  }, [displayMode]);

  const handleNextMonth = useCallback(() => {
    setToday((prev) => prev.clone().add(1, displayMode));
  }, [displayMode]);

  const handleCurrentMonth = useCallback(() => {
    setToday(moment());
  }, []);

  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([]);

  // filter tasks
  const filterTasks = (searchText: string) => {
    const result = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredTasks(result);
  };

  const clearFilter = () => {
    setFilteredTasks([]);
  };

  const closeModal = useCallback(() => {
    setSelectedTask(null);
    setIsOpen(false);
  }, []);

  const openFormHandler = useCallback(
    (date?: string, taskToUpdate?: TaskType) => {
      if (taskToUpdate) {
        setSelectedTask(taskToUpdate);
      }
      if (date) {
        setSelectedDay(date);
      }
      setIsOpen(true);
    },
    [],
  );

  const handleSaveTask = useCallback(
    (updatedTask: TaskType) => {
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
      closeModal();
    },
    [closeModal],
  );

  return (
    <CalendarContext.Provider
      value={{
        today,
        tasks,
        holidays,
        filteredTasks,
        displayMode,
        setDisplayMode,
        handlePrevMonth,
        handleNextMonth,
        handleCurrentMonth,
        filterTasks,
        clearFilter,
        setTasks,
        setHolidays,
        closeModal,
        openFormHandler,
        handleSaveTask,
        isOpen,
        selectedTask,
        selectedDay,
        setSelectedDay,
        setSelectedTask,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      "useCalendarContext must be used within a CalendarProvider",
    );
  }
  return context;
};

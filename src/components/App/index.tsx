import moment, { Moment, unitOfTime } from "moment";
import { useEffect, useState } from "react";

import { DISPLAY_MODE_DAY, DISPLAY_MODE_MONTH } from "../../helpers/constants";
import {
  HolidayType,
  HolidaysService,
} from "../../lib/services/holidaysService";
import { TaskType } from "../../lib/types/taskType";
import { CalendarGrid } from "../CalendarGrid";
import { DayShowComponent } from "../DayShowComponent";
import { Filter } from "../Filter";
import { Navigation } from "../Navigation";
import TaskForm from "../TaskForm";
import { FormPositionWrapper, FormWrapper, Wrapper } from "./App.styled";

const App = () => {
  const [displayMode, setDisplayMode] =
    useState<unitOfTime.DurationConstructor>(DISPLAY_MODE_MONTH);

  const [today, setToday] = useState(moment());
  const startDay: Moment = today.clone().startOf("month").startOf("week");

  const handlePrevMonth = () => {
    setToday((prev) => prev.clone().subtract("1", displayMode));
  };
  const handleNextMonth = () => {
    setToday((prev) => prev.clone().add("1", displayMode));
  };

  const handleCurrentMonth = () => {
    setToday(moment());
  };

  // form
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const closeModal = () => {
    setSelectedTask(null);
    setIsOpen(false);
  };

  const openFormHandler = (date?: string, taskToUpdate?: TaskType) => {
    if (taskToUpdate) {
      setSelectedTask(taskToUpdate);
    }
    if (date) {
      setSelectedDay(date);
    }
    setIsOpen(true);
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

    closeModal();
  };

  // Holidays
  const [holidays, setHolidays] = useState<HolidayType[] | []>([]);

  useEffect(() => {
    const getHolidays = async () => {
      try {
        const fetchedHolidays = await HolidaysService.getHolidaysUA(
          today.format("YYYY"),
        );
        const worldwideHolidays = await HolidaysService.getWorldWideHolidays();

        setHolidays([...fetchedHolidays, ...worldwideHolidays]);
      } catch (error) {
        console.error("Error fetching holidays:", error);
      }
    };

    getHolidays();
  }, [today]);

  // tasks
  const [tasks, setTasks] = useState<TaskType[]>([]);
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

  return (
    <>
      {isOpen ? (
        <FormPositionWrapper onClick={closeModal}>
          <FormWrapper onClick={(e) => e.stopPropagation()}>
            <TaskForm
              task={selectedTask}
              defaultDay={selectedDay ?? undefined}
              onSave={handleSaveTask}
              onCancel={closeModal}
            />
          </FormWrapper>
        </FormPositionWrapper>
      ) : null}
      <Wrapper>
        <Filter onSearch={filterTasks} onClearFilter={clearFilter} />
        <Navigation
          today={today}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          handleCurrentMonth={handleCurrentMonth}
          setDisplayMode={setDisplayMode}
          displayMode={displayMode}
        />
        {displayMode === DISPLAY_MODE_MONTH ? (
          <CalendarGrid
            startDay={startDay}
            today={today}
            holidays={holidays}
            tasks={filteredTasks.length !== 0 ? filteredTasks : tasks}
            openFormHandler={openFormHandler}
            setDisplayMode={setDisplayMode}
          />
        ) : null}

        {displayMode === DISPLAY_MODE_DAY ? (
          <DayShowComponent
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            tasks={tasks}
            today={today}
            defaultDay={selectedDay ?? undefined}
            onSave={handleSaveTask}
            openFormHandler={openFormHandler}
            onCancel={closeModal}
          />
        ) : null}
      </Wrapper>
    </>
  );
};

export { App };

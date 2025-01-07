import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

import {
  HolidayType,
  HolidaysService,
} from "../../lib/services/holidaysService";
import { CalendarGrid } from "../CalendarGrid";
import { Filter } from "../Filter";
import { Navigation } from "../Navigation";
import { Wrapper } from "./App.styled";

interface TaskType {
  id: number;
  description: string;
  day: string;
}

const App = () => {
  const [today, setToday] = useState(moment());
  const startDay: Moment = today.clone().startOf("month").startOf("week");

  const handlePrevMonth = () => {
    setToday((prev) => prev.clone().subtract("1", "month"));
  };
  const handleNextMonth = () => {
    setToday((prev) => prev.clone().add("1", "month"));
  };

  const handleCurrentMonth = () => {
    setToday(moment());
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
  const [tasks, setTasks] = useState<TaskType[]>([]); // Explicitly type the state
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([]);

  // filter tasks
  const filterTasks = (searchText: string) => {
    const result = tasks.filter((task) =>
      task.description.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredTasks(result);
  };

  const clearFilter = () => {
    setFilteredTasks([]);
  };

  return (
    <Wrapper>
      <Filter onSearch={filterTasks} onClearFilter={clearFilter} />
      <Navigation
        today={today}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        handleCurrentMonth={handleCurrentMonth}
      />
      <CalendarGrid
        startDay={startDay}
        holidays={holidays}
        tasks={filteredTasks.length !== 0 ? filteredTasks : tasks}
        setTasks={setTasks}
      />
    </Wrapper>
  );
};

export { App };

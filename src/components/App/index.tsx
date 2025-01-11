import { useEffect } from "react";

import { useCalendarContext } from "../../CalendarContext";
import { DISPLAY_MODE_DAY, DISPLAY_MODE_MONTH } from "../../helpers/constants";
import { HolidaysService } from "../../lib/services/holidaysService";
import { CalendarGrid } from "../CalendarGrid";
import { DayShowComponent } from "../DayShowComponent";
import { Filter } from "../Filter";
import { Navigation } from "../Navigation";
import TaskForm from "../TaskForm";
import { FormPositionWrapper, FormWrapper, Wrapper } from "./App.styled";

const App = () => {
  const {
    today,
    setHolidays,
    displayMode,
    isOpen,
    closeModal,
    tasks,
    filteredTasks,
  } = useCalendarContext();

  // Holidays
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

  return (
    <>
      {isOpen ? (
        <FormPositionWrapper onClick={closeModal}>
          <FormWrapper onClick={(e) => e.stopPropagation()}>
            <TaskForm onCancel={closeModal} />
          </FormWrapper>
        </FormPositionWrapper>
      ) : null}
      <Wrapper>
        <Filter />
        <Navigation />
        {displayMode === DISPLAY_MODE_MONTH ? <CalendarGrid /> : null}

        {displayMode === DISPLAY_MODE_DAY ? (
          <DayShowComponent
            onCancel={closeModal}
            tasks={filteredTasks.length !== 0 ? filteredTasks : tasks}
          />
        ) : null}
      </Wrapper>
    </>
  );
};

export { App };

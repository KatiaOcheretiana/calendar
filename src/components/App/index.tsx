import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

import {
  HolidayType,
  HolidaysService,
} from "../../lib/services/holidaysService";
import { CalendarGrid } from "../CalendarGrid";
import { Header } from "../Header";
import { Navigation } from "../Navigation";
import { Wrapper } from "./App.styled";

const App = () => {
  // moment.updateLocale("en", { week: { dow: 1 } });
  // const today = moment();

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
        console.log(today.format("YYYY"));

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
    <Wrapper>
      <Header />
      <Navigation
        today={today}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        handleCurrentMonth={handleCurrentMonth}
      />
      <CalendarGrid startDay={startDay} holidays={holidays} />{" "}
    </Wrapper>
  );
};

export { App };

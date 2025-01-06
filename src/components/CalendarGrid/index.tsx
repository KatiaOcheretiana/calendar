import moment, { Moment } from "moment";

import { HolidayType } from "../../lib/services/holidaysService";
import {
  CurrentDay,
  DayWrapper,
  GridWrapper,
  HolidayItem,
  HolidayList,
  RowInCell,
  SellWrapper,
  WeekDaysList,
} from "./CalendarGrid.styled";

interface CalendarGridPropsType {
  startDay: Moment;
  holidays: HolidayType[];
}

const CalendarGrid = ({ startDay, holidays }: CalendarGridPropsType) => {
  const totalDays = 42;
  const day = startDay.clone();
  const daysArray = Array.from({ length: totalDays }, () => {
    const newDay = day.add(1, "day").clone();
    return newDay.isValid() ? newDay : null;
  });

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const isCurrentDay = (day: Moment) => moment().isSame(day, "day");

  // Function to check if the day is a holiday
  const isHoliday = (day: Moment) => {
    const formattedDay = day.format("YYYY-MM-DD");
    return holidays.some((holiday) => holiday.date === formattedDay);
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
          <SellWrapper key={dayItem?.unix()}>
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
          </SellWrapper>
        ))}
      </GridWrapper>
    </div>
  );
};

export { CalendarGrid };

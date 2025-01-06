import moment, { Moment } from "moment";

import {
  CurrentDay,
  DayWrapper,
  GridWrapper,
  RowInCell,
  SellWrapper,
  WeekDaysList,
} from "./CalendarGrid.styled";

interface CalendarGridPropsType {
  startDay: Moment;
}

const CalendarGrid = ({ startDay }: CalendarGridPropsType) => {
  const totalDays = 42;
  const day = startDay.clone();
  const daysArray = Array.from({ length: totalDays }, () => {
    const newDay = day.add(1, "day").clone();
    return newDay.isValid() ? newDay : null;
  });

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const isCurrentDay = (day: Moment) => moment().isSame(day, "day");
  return (
    <div>
      <WeekDaysList>
        {weekDays.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </WeekDaysList>
      <GridWrapper>
        {daysArray.map((dayItem, i) => (
          <SellWrapper key={i}>
            <RowInCell $justifyContent="flex-end">
              <DayWrapper>
                {dayItem ? (
                  isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format("D")}</CurrentDay>
                  ) : (
                    dayItem.format("D")
                  )
                ) : null}
              </DayWrapper>
            </RowInCell>
          </SellWrapper>
        ))}
      </GridWrapper>
    </div>
  );
};

export { CalendarGrid };

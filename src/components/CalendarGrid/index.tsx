import { Moment } from "moment";

import {
  DayWrapper,
  GridWrapper,
  RowInCell,
  SellWrapper,
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

  return (
    <div>
      <GridWrapper>
        {daysArray.map((dayItem, i) => (
          <SellWrapper
            key={i}
            $isWeekend={dayItem?.day() === 6 || dayItem?.day() === 0}
          >
            <RowInCell $justifyContent="flex-end">
              <DayWrapper>{dayItem && dayItem.format("D")}</DayWrapper>
            </RowInCell>
          </SellWrapper>
        ))}
      </GridWrapper>
    </div>
  );
};

export { CalendarGrid };

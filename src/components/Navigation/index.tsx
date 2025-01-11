import { useCalendarContext } from "../../CalendarContext";
import { DISPLAY_MODE_DAY, DISPLAY_MODE_MONTH } from "../../helpers/constants";
import { ChevronIcon } from "../Icons";
import {
  Button,
  ControlButtonWrapper,
  MonthAndDayButton,
  MonthAndYear,
  MonthButton,
  Wrapper,
} from "./Navigation.styled";

const Navigation = () => {
  const {
    today,
    handlePrevMonth,
    handleNextMonth,
    handleCurrentMonth,
    setDisplayMode,
    displayMode,
  } = useCalendarContext();

  return (
    <Wrapper>
      <ControlButtonWrapper>
        <Button onClick={() => handlePrevMonth()}>
          <ChevronIcon rotate={180} color="gray" />
        </Button>

        <Button onClick={() => handleNextMonth()}>
          <ChevronIcon color="gray" />
        </Button>
      </ControlButtonWrapper>
      <MonthAndYear>
        {displayMode === DISPLAY_MODE_DAY ? (
          <span>{today.format("DD")}</span>
        ) : null}
        <span>{today.format("MMMM")}</span>
        <span>{today.format("YYYY")}</span>
      </MonthAndYear>
      <ControlButtonWrapper>
        <MonthButton onClick={() => handleCurrentMonth()}>Today</MonthButton>

        <MonthAndDayButton>
          <MonthButton
            $isPressed={displayMode === DISPLAY_MODE_MONTH}
            onClick={() => setDisplayMode(DISPLAY_MODE_MONTH)}
          >
            Month
          </MonthButton>

          <MonthButton
            $isPressed={displayMode === DISPLAY_MODE_DAY}
            onClick={() => setDisplayMode(DISPLAY_MODE_DAY)}
          >
            Day
          </MonthButton>
        </MonthAndDayButton>
      </ControlButtonWrapper>
    </Wrapper>
  );
};

export { Navigation };

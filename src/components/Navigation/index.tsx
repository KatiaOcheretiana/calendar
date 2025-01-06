import { Moment } from "moment";

import { ChevronIcon } from "../Icons";
import {
  Button,
  ControlButtonWrapper,
  MonthAndYear,
  MonthButton,
  Wrapper,
} from "./Navigation.styled";

interface NavigationPropType {
  today: Moment;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleCurrentMonth: () => void;
}

const Navigation = ({
  today,
  handlePrevMonth,
  handleNextMonth,
  handleCurrentMonth,
}: NavigationPropType) => {
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
        <span>{today.format("MMMM")}</span>
        <span>{today.format("YYYY")}</span>
      </MonthAndYear>
      <ControlButtonWrapper>
        <MonthButton onClick={() => handleCurrentMonth()}>Month</MonthButton>
      </ControlButtonWrapper>
    </Wrapper>
  );
};

export { Navigation };

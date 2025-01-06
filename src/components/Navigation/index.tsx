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
}

const Navigation = ({ today }: NavigationPropType) => {
  return (
    <Wrapper>
      <ControlButtonWrapper>
        <Button>
          <ChevronIcon rotate={180} color="gray" />
        </Button>

        <Button>
          <ChevronIcon color="gray" />
        </Button>
      </ControlButtonWrapper>
      <MonthAndYear>
        <span>{today.format("MMMM")}</span>
        <span>{today.format("YYYY")}</span>
      </MonthAndYear>
      <ControlButtonWrapper>
        <MonthButton>Month</MonthButton>
      </ControlButtonWrapper>
    </Wrapper>
  );
};

export { Navigation };

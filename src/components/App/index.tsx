import moment, { Moment } from "moment";

import { CalendarGrid } from "../CalendarGrid";
import { Header } from "../Header";
import { Navigation } from "../Navigation";
import { Wrapper } from "./App.styled";

const App = () => {
  // moment.updateLocale("en", { week: { dow: 1 } });
  const today = moment();
  const startDay: Moment = today.clone().startOf("month").startOf("week");

  return (
    <Wrapper>
      <Header />
      <Navigation today={today} />
      <CalendarGrid startDay={startDay} />{" "}
    </Wrapper>
  );
};

export { App };

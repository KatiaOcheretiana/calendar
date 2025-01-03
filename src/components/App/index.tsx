import moment, { Moment } from "moment";

import { CalendarGrid } from "../CalendarGrid";
import { Header } from "../Header";
import { Navigation } from "../Navigation";

const App = () => {
  // window.moment = moment;
  // moment.updateLocale("en", { week: { dow: 1 } });
  const startDay: Moment = moment().startOf("month").startOf("week");
  // const endDay = moment().endOf("month").endOf("week");

  // // console.log(startDay);
  // // console.log(endDay);

  // const calendar = [];
  // const day = startDay.clone();

  // while (!day.isAfter(endDay)) {
  //   // calendar
  //   console.log(day);

  //   calendar.push(day.clone());
  //   day.add(1, "day");
  // }

  // console.log(calendar);

  return (
    <div>
      <Header />
      <Navigation />
      <CalendarGrid startDay={startDay} />{" "}
    </div>
  );
};

export { App };

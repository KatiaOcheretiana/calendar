import moment, { Moment } from "moment";

import { TaskType } from "../lib/types/taskType";

export const isCurrentDay = (day: Moment) => moment().isSame(day, "day");
export const isSelectedMonth = (day: Moment, today: Moment) =>
  today.isSame(day, "month");

export const isDayContainCurrentTask = (task: TaskType, dayItem: Moment) =>
  task.date >= dayItem.format("X") &&
  task.date <= dayItem.clone().endOf("day").format("X");

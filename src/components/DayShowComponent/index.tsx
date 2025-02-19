import moment from "moment";
import { useState } from "react";

import { useCalendarContext } from "../../CalendarContext";
import { isDayContainCurrentTask } from "../../helpers";
import { ITEMS_PER_DAY } from "../../helpers/constants";
import { TaskType } from "../../lib/types/taskType";
import TaskForm from "../TaskForm";
import {
  Button,
  FormWrapper,
  NoTaskMsg,
  ScaleCellEventWrapper,
  ScaleCellTimeWrapper,
  ScaleCellWrapper,
  ScaleWraper,
  SecondColumn,
  TaskFormWrapper,
  TaskItemWrapper,
  Wrapper,
} from "./DayShowComponent.styled";

interface DayShowComponentPropsType {
  onCancel?: () => void;
  tasks: TaskType[];
}

function DayShowComponent({ onCancel, tasks }: DayShowComponentPropsType) {
  const {
    today,
    selectedTask,
    setSelectedTask,
    handleSaveTask,
    openFormHandler,
  } = useCalendarContext();

  const [droppedHour, setDroppedHour] = useState<number | null>(null);

  const tasksList = tasks.filter((task) =>
    isDayContainCurrentTask(task, today),
  );

  const cells = [...new Array(ITEMS_PER_DAY)].map((_, i) => {
    const temp: TaskType[] = [];
    tasksList.forEach((task) => {
      if (+moment.unix(+task.date).format("H") === i) {
        temp.push(task);
      }
    });
    return temp;
  });

  const onDragEndHandler = (
    e: React.DragEvent<HTMLButtonElement>,
    task: TaskType,
  ) => {
    e.preventDefault();
    if (droppedHour === null) return;

    const updatedDate = moment
      .unix(+task.date)
      .set({ hour: droppedHour, minute: 0 })
      .unix();

    handleSaveTask({ ...task, date: String(updatedDate) });
  };

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>, i: number) => {
    e.preventDefault();
    setDroppedHour(i);
  };

  const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <div>
        <ScaleWraper>
          {cells.map((tasks, i) => (
            <ScaleCellWrapper
              key={i}
              onDrop={(e) => onDropHandler(e, i)}
              onDragOver={(e) => onDragOverHandler(e)}
            >
              <ScaleCellTimeWrapper>
                {i ? <>{`${i}`.padStart(2, "0")}:00</> : null}
              </ScaleCellTimeWrapper>
              <ScaleCellEventWrapper>
                {tasks.map((task) => (
                  <TaskItemWrapper
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    draggable
                    onDragEnd={(e) => onDragEndHandler(e, task)}
                  >
                    {task.title}
                  </TaskItemWrapper>
                ))}
              </ScaleCellEventWrapper>
            </ScaleCellWrapper>
          ))}
        </ScaleWraper>
      </div>
      <SecondColumn>
        <TaskFormWrapper>
          {selectedTask ? (
            <FormWrapper>
              {selectedTask.title}

              <TaskForm onCancel={onCancel} />
            </FormWrapper>
          ) : (
            <NoTaskMsg>No task selected</NoTaskMsg>
          )}
        </TaskFormWrapper>
        {!selectedTask && (
          <Button onClick={() => openFormHandler(String(today?.unix()))}>
            Create new task
          </Button>
        )}
      </SecondColumn>
    </Wrapper>
  );
}

export { DayShowComponent };

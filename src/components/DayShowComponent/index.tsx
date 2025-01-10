import { Moment } from "moment";

import { isDayContainCurrentTask } from "../../helpers";
import { TaskType } from "../../lib/types/taskType";
import TaskForm from "../TaskForm";
import {
  Button,
  FormWrapper,
  NoTaskMsg,
  SecondColumn,
  TaskFormWrapper,
  TaskItemWrapper,
  TaskListItemWrapper,
  TasksListWrapper,
  Wrapper,
} from "./DayShowComponent.styled";

interface DayShowComponentPropsType {
  tasks: TaskType[];
  today: Moment;
  selectedTask: TaskType | null;
  setSelectedTask: (task: TaskType) => void;
  defaultDay?: string;
  onSave: (data: TaskType) => void;
  onCancel?: () => void;

  openFormHandler: (date?: string, taskToUpdate?: TaskType) => void;
}

function DayShowComponent({
  tasks,
  today,
  selectedTask,
  setSelectedTask,
  defaultDay,
  onSave,
  openFormHandler,
  onCancel,
}: DayShowComponentPropsType) {
  const tasksList = tasks.filter((task) =>
    isDayContainCurrentTask(task, today),
  );

  return (
    <Wrapper>
      <TasksListWrapper>
        {tasksList.map((task) => (
          <TaskListItemWrapper key={task.id}>
            <TaskItemWrapper onClick={() => setSelectedTask(task)}>
              {task.title}
            </TaskItemWrapper>
          </TaskListItemWrapper>
        ))}
      </TasksListWrapper>
      <SecondColumn>
        <TaskFormWrapper>
          {selectedTask ? (
            <FormWrapper>
              {selectedTask.title}

              <TaskForm
                task={selectedTask}
                defaultDay={defaultDay}
                onSave={onSave}
                onCancel={onCancel}
              />
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

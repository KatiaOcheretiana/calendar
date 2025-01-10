import moment from "moment";
import { useEffect, useState } from "react";

import { TaskType } from "../../lib/types/taskType";
import {
  Button,
  ButtonsWrapper,
  CancelButton,
  Title,
  TitleInput,
} from "./TaskForm.styled";

interface TaskFormProps {
  task: TaskType | null;
  defaultDay?: string;
  onSave: (data: TaskType) => void;
  onCancel?: () => void;
}

function TaskForm({ task, defaultDay, onSave, onCancel }: TaskFormProps) {
  const [title, setTitle] = useState(task?.title || "");
  const [date, setDate] = useState(
    task?.date
      ? moment.unix(Number(task.date)).format("YYYY-MM-DDTHH:mm")
      : moment.unix(Number(defaultDay)).format("YYYY-MM-DDTHH:mm"),
  );

  useEffect(() => {
    if (task) {
      setDate(moment.unix(Number(task.date)).format("YYYY-MM-DDTHH:mm"));
    } else {
      setDate(moment.unix(Number(defaultDay)).format("YYYY-MM-DDTHH:mm"));
    }
  }, [task]);

  const handleSave = () => {
    if (!title.trim() || !date.trim()) return;

    const unixDate = moment(date).unix();

    onSave({
      ...task,
      title,
      date: String(unixDate),
    } as TaskType);
  };

  return (
    <>
      <Title>{task ? "Edit Task" : "Create Task"}</Title>
      <TitleInput
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        required
      />
      <TitleInput
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <ButtonsWrapper>
        <Button onClick={handleSave}>
          {task ? "Save Changes" : "Add Task"}
        </Button>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
      </ButtonsWrapper>
    </>
  );
}

export default TaskForm;

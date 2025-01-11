import moment from "moment";
import { useEffect, useState } from "react";

import { useCalendarContext } from "../../CalendarContext";
import { TaskType } from "../../lib/types/taskType";
import {
  Button,
  ButtonsWrapper,
  CancelButton,
  Title,
  TitleInput,
} from "./TaskForm.styled";

interface TaskFormProps {
  onCancel?: () => void;
}

function TaskForm({ onCancel }: TaskFormProps) {
  const { selectedTask, selectedDay, handleSaveTask } = useCalendarContext();

  const [title, setTitle] = useState(selectedTask?.title || "");
  const [date, setDate] = useState(
    selectedTask?.date
      ? moment.unix(Number(selectedTask.date)).format("YYYY-MM-DDTHH:mm")
      : moment
          .unix(Number(selectedDay ?? undefined))
          .format("YYYY-MM-DDTHH:mm"),
  );

  useEffect(() => {
    if (selectedTask) {
      setDate(
        moment.unix(Number(selectedTask.date)).format("YYYY-MM-DDTHH:mm"),
      );
    } else {
      setDate(
        moment
          .unix(Number(selectedDay ?? undefined))
          .format("YYYY-MM-DDTHH:mm"),
      );
    }
  }, [selectedTask]);

  const handleSave = () => {
    if (!title.trim() || !date.trim()) return;

    const unixDate = moment(date).unix();

    handleSaveTask({
      ...selectedTask,
      title,
      date: String(unixDate),
    } as TaskType);
  };

  return (
    <>
      <Title>{selectedTask ? "Edit Task" : "Create Task"}</Title>
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
          {selectedTask ? "Save Changes" : "Add Task"}
        </Button>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
      </ButtonsWrapper>
    </>
  );
}

export default TaskForm;

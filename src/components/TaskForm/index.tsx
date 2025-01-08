import moment from "moment";
import { useState } from "react";

import { TaskType } from "../../lib/types/taskType";

interface TaskFormProps {
  task: TaskType | null;
  defaultDay?: string;
  onSave: (data: TaskType) => void;
  onCancel: () => void;
}

function TaskForm({ task, defaultDay, onSave, onCancel }: TaskFormProps) {
  const [title, setTitle] = useState(task?.title || "");
  const [date, setDate] = useState(
    task?.date
      ? moment.unix(Number(task.date)).format("YYYY-MM-DDTHH:mm")
      : defaultDay || "",
  );

  const handleSave = () => {
    if (!title.trim() || !date.trim()) return;

    const unixDate = moment(date).unix();

    onSave({
      ...task,
      title,
      date: unixDate.toString(),
    } as TaskType);
  };

  return (
    <>
      <p>{task ? "Edit Task" : "Create Task"}</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        required
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <div>
        <button onClick={handleSave}>
          {task ? "Save Changes" : "Add Task"}
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </>
  );
}

export default TaskForm;

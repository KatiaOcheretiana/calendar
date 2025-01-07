import { useState } from "react";

interface TaskType {
  id: number;
  description: string;
  day: string;
}

interface TaskFormProps {
  task: TaskType | null;
  defaultDay?: string;
  onSave: (data: TaskType) => void;
  onCancel: () => void;
}

function TaskForm({ task, defaultDay, onSave, onCancel }: TaskFormProps) {
  const [description, setDescription] = useState(task?.description || "");
  const [day, setDay] = useState(task?.day || defaultDay || "");

  const handleSave = () => {
    if (!description.trim()) return;
    onSave({ ...task, description, day } as TaskType);
  };

  return (
    <>
      <p>{task ? "Edit Task" : "Create Task"}</p>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <input type="date" value={day} onChange={(e) => setDay(e.target.value)} />
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

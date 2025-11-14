import { useState } from "react";
import { Task } from "../Interface/Task";

interface TaskFormProps {
  onTaskCreated: (task: Omit<Task, "id">) => void;
}
export default function TaskForm({ onTaskCreated }: TaskFormProps) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("El título es obligatorio");
      return;
    }

    const newTask: Omit<Task, "id"> = {
      title,
      description: description.trim() || undefined,
      completed: false,
      createdAt: new Date(),
    };
    onTaskCreated(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card w-75">
        <form onSubmit={handleCreateTask} className="p-3">
          <div className="mb-3">
            <label className="form-label text-secondary">Título:</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3 text-secondary">
            <label className="form-label">Descripción:</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Crear tarea
          </button>
        </form>
      </div>
    </div>
  );
}

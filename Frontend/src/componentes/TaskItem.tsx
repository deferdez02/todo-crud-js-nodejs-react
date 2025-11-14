import { Task } from "../Interface/Task";
import React from "react";
import { useState } from "react";

interface TaskItemProps {
  task: Task;
  onToggleCompleted?: (id: string) => void;
  onToggleDelete?: (id: string) => void;
  onToggleEdit?: (id: string, title: string, description?: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleCompleted,
  onToggleDelete,
  onToggleEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <div className="card w-75">
          <div
            className="btn btn-light w-100 text-secondary text-start"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${task.id}`}
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <div className="d-flex  text-secondary">
              <button
                className={`btn fs-5 px-2 ${task.completed ? "bi-patch-check-fill text-success" : "bi-patch-check text-secondary"}`}
                onClick={() => onToggleCompleted?.(task.id)}
              ></button>
              {task.title}
              <div className="ms-auto">
                <button
                  className="btn bi bi bi-trash  text-secondary fs-5 px-2"
                  onClick={() => onToggleDelete?.(task.id)}
                ></button>
                <button
                  className={`btn fs-5 px-2 ${isEditing ? " bi bi-pencil-fill  text-danger" : "bi bi-pencil text-danger"}`}
                  onClick={() => setIsEditing(true)}
                ></button>
              </div>
            </div>
          </div>
          <div className="collapse text-secondary" id={`collapse-${task.id}`}>
            <div className="d-flex mx-5 my-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      console.log("Intentando actualizar tarea:", {
                        id: task.id,
                        title: editTitle,
                        description: editDescription,
                      });
                      onToggleEdit?.(task.id, editTitle, editDescription);
                      setIsEditing(false);
                    }}
                  >
                    Actualizar tarea
                  </button>
                </>
              ) : (
                <div> {task.description}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TaskItem;

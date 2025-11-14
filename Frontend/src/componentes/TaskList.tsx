import { useEffect, useState } from "react";
import { Task } from "../Interface/Task";
import TaskItem from "./TaskItem";

const API_URL = import.meta.env.VITE_API_URL;

interface TaskListProps {
  tasks: Task[];
  onToggleCompleted?: (id: string) => void;
  onToggleDelete?: (id: string) => void;
  onToggleEdit?: (id: string, title: string, description?: string) => void;
}

export default function TaskList({
  tasks,
  onToggleCompleted,
  onToggleDelete,
  onToggleEdit,
}: TaskListProps) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCompleted={onToggleCompleted}
          onToggleDelete={onToggleDelete}
          onToggleEdit={onToggleEdit}
        />
      ))}
    </div>
  );
}

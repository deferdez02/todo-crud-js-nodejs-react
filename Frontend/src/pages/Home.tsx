import Navbar from "../componentes/Navbar";
import Toolbar from "../componentes/Toolbar";
import { useEffect, useState } from "react";
import TaskList from "../componentes/TaskList";
import TaskForm from "../componentes/TaskForm";
import { Task } from "../Interface/Task";

const API_URL = import.meta.env.VITE_API_URL;

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Error al cargar tareas", err);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (task: Omit<Task, "id">) => {
    try {
      console.log("Enviando tarea:", task);
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      setTasks((prev) => [...prev, data.task]);
      console.log("Respuesta del servidor:", data);
    } catch (err) {
      console.error("Error al crear tarea", err);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Error al eliminar tarea", err);
    }
  };

  const toggleCompleted = async (id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    console.log("Tarea encontrada:", task);
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      });
      const data = await res.json();
      console.log("Respuesta del PUT:", data);
      setTasks((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, completed: data.task.completed } : t
        )
      );
    } catch (err) {
      console.error("Error al actualizar tarea", err);
    }
  };
  const updateTask = async (
    id: string,
    title: string,
    description?: string
  ) => {
    console.log("updateTask llamado con:", { id, title, description });
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      console.log("Respuesta del fetch PUT:", res);
      const data = await res.json();
      console.log("Datos recibidos del servidor:", data);
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...data.task } : t))
      );
    } catch (err) {
      console.error("Error al actualizar tarea", err);
    }
  };

  return (
    <div>
      <Navbar />
      <Toolbar />
      <TaskForm onTaskCreated={createTask} />
      <TaskList
        tasks={tasks}
        onToggleCompleted={toggleCompleted}
        onToggleDelete={deleteTask}
        onToggleEdit={updateTask}
      />
    </div>
  );
}

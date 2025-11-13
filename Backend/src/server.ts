import express, { Request, Response } from "express";
import tasksRoutes from "./Api/taskRoutes";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor funcionando correctamente");
});

app.use("/api/tasks", tasksRoutes);



export default app;  
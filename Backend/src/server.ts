import express, { Request, Response } from "express";
import tasksRoutes from "./Api/taskRoutes";
import cors from "cors";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor funcionando correctamente");
});

app.use(cors())
app.use("/api/tasks", tasksRoutes);



export default app;  
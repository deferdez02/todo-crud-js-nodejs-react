import { Router } from "express";
import { Task } from "../Interface/task";
import {DeleteTask, getTasks, PostTask, PutTask} from "../Controllers/tasksController";


const router = Router();

export let tasks: Task[] = [];

router.get('/', getTasks);
router.post('/', PostTask);
router.put("/:id", PutTask);
router.delete("/:id", DeleteTask);

export default router;

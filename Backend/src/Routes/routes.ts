import { Router } from "express"
import {DeleteTask, getTask, getTasks, PostTask, PutTask} from "./Tasks"
const router = Router();

router.get('/', getTasks);
router.get('/', getTask);
router.get('/', PutTask);
router.get('/', PostTask);
router.get('/', DeleteTask);

export default router;

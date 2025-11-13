import { Request, Response } from "express";
import {Task} from "../Interface/task";
import {v4 as uuidv4} from "uuid";

let tasks: Task[]=[];


export const getTasks = (req: Request, res:Response) => {
        
    res.json(tasks)

}

export const PostTask = (req: Request, res:Response) => {
    const {title,description, createdAt} = req.body;
    
     if(!title || !description){
        return res.status(404).json({
            msg:"faltan campos"
        })
    }
    const newTask: Task = {
        id: uuidv4(),
        title,
        description,
        completed: false,
        createdAt: new Date()
    }
    tasks.push(newTask);
    res.status(201).json({
        msg:"tarea creada",
        task: newTask
    })

}

export const PutTask = (req: Request, res:Response) => {
    const {id} =req.params;
    const {title,description, completed,createdAt} = req.body;
    
    const taskIndex = tasks.findIndex((t) => t.id === id);

    if(taskIndex === -1){
        return res.status(404).json({
            msg:" tarea no encontrada"
        })
    }

    tasks[taskIndex]={
        ...tasks[taskIndex],
        title: title ?? tasks[taskIndex].title,
        description:  description ?? tasks[taskIndex]. description,
        completed: completed ?? tasks[taskIndex].completed,
        id,
        createdAt: createdAt ?? tasks[taskIndex].createdAt
    }
    

    res.json({
        msg:"Tarea actualizada", task: tasks[taskIndex]
    });


}

export const DeleteTask = (req: Request, res:Response) => {
    const {id} =req.params;

    const taskIndex = tasks.findIndex((t) => t.id === id);

    if(taskIndex === -1){
        return res.status(404).json({
            msg:" tarea no encontrada"
        })
    }
    const deletedTask=tasks.splice(taskIndex,1)[0];
    res.json({
        msg:"se elimino la tarea",
        task:deletedTask
    })

}


import { Request, Response } from "express";

export const getTasks = (req: Request, res:Response) => {
    res.json({
        msg:'getTasks'
    })

}

export const getTask = (req: Request, res:Response) => {
    const {id} =req.params;
    res.json({
        msg:'getTask',
        id
    })

}
export const PostTask = (req: Request, res:Response) => {
    const {body} = req.params;
    res.json({
        msg:'PostTasks',
        body
    })

}

export const PutTask = (req: Request, res:Response) => {
    const {id} =req.params;
    const {body} = req.params;
    res.json({
        msg:'PutTasks',
        id,
        body
    })

}

export const DeleteTask = (req: Request, res:Response) => {
    const {id} =req.params;
    res.json({
        msg:'DeleteTask',
        id
    })

}


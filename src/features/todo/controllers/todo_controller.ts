import { Request, Response } from "express";
import { TodoService } from "../services/todo_service";
import { HttpStatusCode } from "../../../constant/http_status_code";
import { CreateTodo } from "../models/create_todo";

export class TodoController {
    constructor(private todoService: TodoService) { }


    async findTodo(req: Request, res: Response) {
        const user = await this.todoService.findTodo();
        if (user) {
            res.status(HttpStatusCode.OK).json({
                status: HttpStatusCode.OK,
                error: false,
                data: user
            });
        } else {
            res.status(HttpStatusCode.BAD_REQUEST).json({
                status: HttpStatusCode.BAD_REQUEST,
                error: true,
                message: 'Data not found'
            });
        }
    }

    async createTodo(req: Request, res: Response) {
        const formData: CreateTodo = {
            description: req.body.description,
            status: req.body.status,
            users_id: req.body.users_id
        }

        const user = await this.todoService.createTodo(formData);

        if (user) {
            res.status(HttpStatusCode.CREATED).json({
                status: HttpStatusCode.CREATED,
                error: false,
                message: "Data created successfully",
            });
        } else {
            res.status(HttpStatusCode.BAD_REQUEST).json({
                status: HttpStatusCode.BAD_REQUEST,
                error: true,
                message: 'Failed to create data'
            });
        }
    }
}
import { prisma } from "../../../config/prisma";
import { CreateTodo } from "../models/create_todo";
import { TodoDao } from "../models/get_todo";

export class TodoRepository {
    async findTodo(): Promise<TodoDao[] | null> {
        return await prisma.todo.findMany();
    }

    async findTodoById(todo_id: number): Promise<TodoDao | null> {
        return await prisma.todo.findUnique({
            where: {
                todo_id: Number(todo_id)
            }
        });
    }

    async createTodo(todoDTO: CreateTodo): Promise<TodoDao | null> {
        return await prisma.todo.create({
            data: {
                created_at: new Date(),
                description: todoDTO.description,
                status: todoDTO.status,
                users_id: Number(todoDTO.users_id)
            }
        });
    }

    async updateTodoById(todo_id: number, todoDTO: CreateTodo): Promise<TodoDao | null> {
        return await prisma.todo.update({
            where: {
                todo_id: Number(todo_id)
            },
            data: {
                description: todoDTO.description,
                status: todoDTO.status,
                users_id: todoDTO.users_id
            }
        });
    }
}
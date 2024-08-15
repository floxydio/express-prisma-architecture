import { CreateTodo } from "../models/create_todo";
import { TodoDao } from "../models/get_todo";
import { TodoRepository } from "../repository/todo_repository";

export class TodoService {
    private todoRepository: TodoRepository;
    constructor() {
        this.todoRepository = new TodoRepository();
    }

    
    async findTodo(): Promise<TodoDao[] | null> {
        return this.todoRepository.findTodo();
    }

    async findTodoById(todo_id: number): Promise<TodoDao | null> {
        return this.todoRepository.findTodoById(todo_id);
    }

    async createTodo(todoDTO: CreateTodo): Promise<TodoDao | null> {
        return this.todoRepository.createTodo(todoDTO);
    }

    async updateTodoById(todo_id: number, todoDTO: CreateTodo): Promise<TodoDao | null> {
        return this.todoRepository.updateTodoById(todo_id, todoDTO);
    }
}
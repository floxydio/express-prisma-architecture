import { Router } from 'express'
import { TodoController } from '../controllers/todo_controller'
import { CreateTodo, TodoService } from '../todo';
import { validationMiddleware } from '../../../middleware/validation';

const router: Router = Router()
const todoService = new TodoService();
const todoController = new TodoController(todoService)

router.get("/find", todoController.findTodo.bind(todoController))
router.post("/create-todo",validationMiddleware(CreateTodo), todoController.createTodo.bind(todoController))

export default router
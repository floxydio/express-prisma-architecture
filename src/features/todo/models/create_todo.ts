import { IsEmpty, MinLength } from "class-validator";

export class CreateTodo {
    @IsEmpty({ message: 'Description should not be empty' })
    @MinLength(10, { message: 'Description should be at least 10 characters' })
    description: string

    status: number

    @IsEmpty({ message: 'User id should not be empty' })
    users_id: number


    constructor(description?: string, status?: number, users_id?: number) {
        this.description = description ?? '';
        this.status = status ?? 0;
        this.users_id = users_id ?? 0;
    }

}
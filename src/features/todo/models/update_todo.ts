
export class CreateTodo {
    description: string

    status: number

    users_id: number

    constructor(description: string, status: number, users_id: number) {
        this.description = description;
        this.status = status;
        this.users_id = users_id;
    }
}
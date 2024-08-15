export interface TodoDao {
    todo_id: number;
    description: string;
    status: number | null;
    users_id: number | null;
    created_at: Date;
}
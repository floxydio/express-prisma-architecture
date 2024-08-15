import { IsNotEmpty, Matches, MinLength } from "class-validator"

export class SignUpDto {
    @IsNotEmpty({ message: 'Username should not be empty' })
    @MinLength(4, { message: 'Username should be at least 4 characters' })
    name: string;

    @IsNotEmpty({ message: 'Username should not be empty' })
    @MinLength(4, { message: 'Username should be at least 4 characters' })
    username: string

    @IsNotEmpty({ message: 'Password should not be empty' })
    @MinLength(4, { message: 'Password should be at least 4 characters' })
    @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/, { message: 'Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character' })
    password: string

    status_account: number

    created_at: Date

    updated_at: Date

    constructor(name: string, username: string, password: string, status_account: number, created_at: Date, updated_at: Date) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.status_account = status_account;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
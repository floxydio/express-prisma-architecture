import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validationMiddleware<T extends object>(dtoClass: new () => T): (req: Request, res: Response, next: NextFunction) => Promise<void> {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const dtoObject = plainToInstance(dtoClass, req.body);
        const errors: ValidationError[] = await validate(dtoObject);

        if (errors.length > 0) {
            const errorMessages = errors.map((error: ValidationError) => {
                const constraints = error.constraints ? Object.values(error.constraints).join(', ') : '';
                return { field: error.property, message: constraints };
            });

            res.status(400).json({ error_msg: errorMessages });
            return;
        }

        req.body = dtoObject;
        next();
    };
}

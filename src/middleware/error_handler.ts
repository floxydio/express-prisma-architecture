import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../constant/http_status_code';



export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(HttpStatusCode.NOT_FOUND).json({ status: 404, error: true, message: 'Resource not found' });
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ status: 500, error: true, message: 'Internal Server Error' });
};

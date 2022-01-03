import { Request, Response, NextFunction } from 'express';

export const findUser = (req: Request, res:Response, next: NextFunction) => {
    res.send(res);
}

import 'dotenv/config'
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req?.headers?.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            if (process.env?.JWT_SECRET && req?.decoded) {
                req!.decoded = jwt.verify(token, process.env.JWT_SECRET);
            }
        }
        return next();
    } catch (e: any) {
        if (e.name === 'TokenExpiredError') {
            return res.status(419).json({
                code: 419,
                message: 'Expired Token.',
            });
        }
        return res.status(401).json({
            code: 401,
            message: 'Invalid Token.',
        });
    }
};

interface SystemError {
    code: string;
    message: string;
}

export default verifyToken;

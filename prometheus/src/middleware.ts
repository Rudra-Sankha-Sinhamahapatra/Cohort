import { NextFunction, Request, Response } from "express";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log("Time took: ",duration," ms");
}
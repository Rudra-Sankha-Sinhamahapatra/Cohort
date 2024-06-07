import { Request,Response,NextFunction } from "express";

export interface type{
    req:Request;
    res:Response;
    next:NextFunction
}

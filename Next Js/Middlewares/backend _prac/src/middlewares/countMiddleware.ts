import express from "express";
import { type } from "../types/types";
const app = express();

let requestcount = 0;

export function countMiddleware({req, res, next}:type) {
  requestcount++;
  next();
}

export function request(){
    return requestcount;
}
import { NextFunction, Request, Response } from "express";
import { activeRequests } from "./activeRequests";
import { httpRequestDuration } from "./histogram";
import { requestClient } from "./requestCount";

export const metricsMiddleware = (req:Request,res:Response,next:NextFunction)=>{
  const startTime = Date.now();
  activeRequests.inc({
    method:req.method,
    route:req.route?req.route.path:req.path,
  });

  res.on("finish",()=> {
      const endTime = Date.now();
      const duration = endTime - startTime;
      console.log(`${req.method} ${req.url} ${res.statusCode} ${endTime - startTime}ms`);

      requestClient.inc({
          method:req.method,
          route:req.route?req.route.path:req.path,
          status_code:res.statusCode
      });

      httpRequestDuration.observe({
          method:req.method,
          route:req.route ? req.route.path : req.path,
          status_code:res.statusCode
      },duration)

      activeRequests.dec({
        method:req.method,
        route:req.route?req.route.path:req.path,
      });
  });

  next();
}



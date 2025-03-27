import  client from "prom-client";

export const requestClient = new client.Counter({
    name:"http_request_count",
    help:"Total number of http requests",
    labelNames:['method','route','status_code']
});


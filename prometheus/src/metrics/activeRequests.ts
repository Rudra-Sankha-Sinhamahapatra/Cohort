import client from "prom-client";

export const activeRequests = new client.Gauge({
    name: "active_requests",
    help: "Number of active requests",
    labelNames: ['method', 'route']  
});
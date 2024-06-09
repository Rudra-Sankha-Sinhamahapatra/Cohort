import WebSocket, {WebSocketServer} from "ws";
import http from 'http'

const server=http.createServer(function(request:any,response:any){
    console.log((new Date())+ 'Received request for '+request.url);
    response.end('hi there');
})

const wss= new WebSocketServer({server});
let userCount=0;
wss.on('connection',function connection(socket){
    socket.on('error',console.error);

    socket.on('message',function message(data,isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState ===WebSocket.OPEN){
                client.send(data,{binary:isBinary})
            }
        });
    });
    console.log(`user connected `,++userCount);
    socket.send('Hello! Message from the Server!');
});

server.listen(8080,function(){
    console.log((new Date())+'Server is listening on port 8080');
})

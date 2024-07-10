import {Server} from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:7000"],
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket)=>{
    console.log ("User is connecting with Socket at ", socket.id);

});

export {app, server, io};
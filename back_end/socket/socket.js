import {Server} from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);

// Socket Backend must implement origin from front end.
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:1004"],
        methods: ["GET", "POST"]
    }
});

const userSockets = {}; 

export const getReceiverSocketId = (receiverId) => {
    return userSockets[receiverId];
}

io.on('connection', (socket)=>{
    console.log ("User is connecting with Socket at ", socket.id);
    const userId = socket.handshake.query.userId;

    if (userId != "undefined") {
        userSockets[userId] = socket.id;
        io.emit("getOnlineUsers", Object.keys(userSockets));
    }

    socket.on('disconnect', ()=> {
        delete userSockets[userId];
        io.emit("getOnlineUsers", Object.keys(userSockets));
    })

});
export {app, server, io};
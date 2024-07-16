import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import AuthRouters from './routes/auth.js';
import MessageRouters from './routes/message.js';
import UserRouters from './routes/user.js';
import mongoConnect from './db/MongoConnect.js';
import cookieParser from 'cookie-parser';
import {app, server} from './socket/socket.js'

const __dirname = path.resolve();

dotenv.config();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', AuthRouters);
app.use('/api/message', MessageRouters);
app.use('/api/users', UserRouters);

app.use(express.static(path.join(__dirname, '/front_end/dist')));
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "front_end", "dist", "index.html"));
})

/*
app.get('/', (req, res)=>{
    // Starter & Root Route
    res.status(200).send("Server is responding");
});
*/


server.listen(PORT, ()=>{
    mongoConnect();
    console.log(`The server is listening at PORT ${PORT}...`);
})
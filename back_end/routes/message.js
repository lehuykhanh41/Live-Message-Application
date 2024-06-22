import express, {Router} from 'express';
import {sendMessage, getMessage} from '../controllers/messageController.js';
import protectRoute from '../middleware/protectRoute.js'

const MessageRouters = express.Router();

MessageRouters.post('/send/:receiverId', protectRoute, sendMessage);
MessageRouters.get('/:receiverId', protectRoute, getMessage);

export default MessageRouters;
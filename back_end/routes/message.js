import express, {Router} from 'express';
import {sendMessage, getMessage, sendGroupMessage} from '../controllers/messageController.js';
import verifyUserBeforeOperaton from '../middleware/verifyUserBeforeOperaton.js'

const MessageRouters = express.Router();

MessageRouters.post('/send/:receiverId', verifyUserBeforeOperaton, sendMessage);
MessageRouters.post('/sendGroup/:conversationId', verifyUserBeforeOperaton, sendGroupMessage);
MessageRouters.get('/:conversationId', verifyUserBeforeOperaton, getMessage);

export default MessageRouters;
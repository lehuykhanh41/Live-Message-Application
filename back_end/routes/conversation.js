import express, {Router} from 'express';
import { getSingleConversations, getGroupConversations, createConversation, addPersonToConversation, removePersonFromConversation, viewPeopleInConversation } from '../controllers/conversationContrller.js';
import verifyUserBeforeOperaton from '../middleware/verifyUserBeforeOperaton.js'

const ConversationRouters = express.Router();

ConversationRouters.get('/single', verifyUserBeforeOperaton, getSingleConversations);
ConversationRouters.get('/group', verifyUserBeforeOperaton, getGroupConversations);
ConversationRouters.get('/viewPeople/:conversationId', verifyUserBeforeOperaton, viewPeopleInConversation);
ConversationRouters.post('/create', verifyUserBeforeOperaton, createConversation);
ConversationRouters.post('/add/:conversationId', verifyUserBeforeOperaton, addPersonToConversation);
ConversationRouters.post('/remove/:conversationId', verifyUserBeforeOperaton, removePersonFromConversation);

export default ConversationRouters;
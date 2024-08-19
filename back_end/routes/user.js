import express from 'express';
import { getAllUsers, searchPerson } from '../controllers/userControllers.js';
import verifyUserBeforeOperaton from '../middleware/verifyUserBeforeOperaton.js';

const UserRouters = express.Router();

UserRouters.get('/', verifyUserBeforeOperaton, getAllUsers);

UserRouters.get('/:personName', verifyUserBeforeOperaton, searchPerson);

export default UserRouters;
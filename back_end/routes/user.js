import express from 'express';
import { getAllUsers, searchPerson } from '../controllers/userControllers.js';
import protectRoute from '../middleware/protectRoute.js';

const UserRouters = express.Router();

UserRouters.get('/', protectRoute, getAllUsers);

UserRouters.get('/:personName', protectRoute, searchPerson);

export default UserRouters;
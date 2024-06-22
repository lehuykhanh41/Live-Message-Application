import express from 'express';
import { getAllUsers } from '../controllers/userControllers.js';
import protectRoute from '../middleware/protectRoute.js';

const UserRouters = express.Router();

UserRouters.get('/', protectRoute, getAllUsers);

export default UserRouters;
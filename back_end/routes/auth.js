import express, { Router } from 'express';
import {signup, login, logout} from '../controllers/authControllers.js'

const AuthRouters = express.Router();

// Registration Routes:

AuthRouters.post('/signup', signup);

AuthRouters.post('/login', login);

AuthRouters.post('/logout', logout);

export default AuthRouters;

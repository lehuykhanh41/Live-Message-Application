import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const verifyUserBeforeOperaton = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            res.status(403).json({message: "Forbidden - No Token."});
        } else {
            const decode = jwt.verify(token, process.env.JWT_KEY);

            if (!decode) {
                res.status(403).json({message: "Forbidden - Invalid Token."});
            } else {
                const user = await User.findById(decode.userID);
                if (!user) {
                    res.status(404).json({message: "User Not Found."});
                }
                req.user = user;
            }
        }   
        next();

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Middleware protection error"})
    }
}

export default verifyUserBeforeOperaton;
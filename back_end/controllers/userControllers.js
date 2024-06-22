import User from '../models/userModel.js';

export const getAllUsers = async (req, res, next) => {

    try {

        const currentUserId = req.user._id;
        const users = await User.find({_id: {$ne: currentUserId}}).select(["username", "name", "avatar"]); // Return all objects from User Database. wthout the current user.

        if (!users) {
            res.status(500).json({error: "User Database Error)"});
            console.log(error);
        } else {
            res.status(200).json(users);
        }

    } catch (error) {
        res.status(500).json({error: "Server Error (Message)"});
        console.log(error);
    }

    next();
}
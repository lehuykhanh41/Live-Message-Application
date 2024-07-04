import User from '../models/userModel.js';

export const getAllUsers = async (req, res, next) => {

    try {

        const currentUserId = req.user._id;
        const users = await User.find({_id: {$ne: currentUserId}}).select(["username", "name", "avatar"]); // Return all objects from User Database. wthout the current user.

        if (!users) {
            res.status(500).json({error: "User Database Error"});
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

export const searchPerson = async(req, res, next) => {

    try {
        const nameToBeFound = req.params.personName;
        const findUser = await User.findOne({name: {$regex: /^nameToBeFound$/i}});

        if (!findUser) {
            res.status(404).json({error: "User not found"});
        } else {
            res.status(200).json(findUser);
        } 
    } catch (err) {
        res.status(500).json({error: "Server Error (At Search Person)"});
        console.log(err);
    }
}
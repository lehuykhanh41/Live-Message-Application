import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import generateToken from '../utils/JWTgenerator.js';

export const signup = async(req, res, next) => {
    try {
        const { username, name, password, pwverify } = req.body;

        // Check for password similarity.
        if (password !== pwverify) {
            return res.status(404).json({error: `Password does not match.`});
        }
        // Check for existing users
        const user = await User.findOne({username});
        if (user) {
            return res.status(400).json({error: "User already existed."});
        }

        // Encryption by BCryptJS
        const salt = await bcryptjs.genSalt(10);
        const encryptedPassword = await bcryptjs.hash(password, salt);

        // Temporary API call for random avatar placeholder.
        const avt = `https://i.pravatar.cc/150/username=${username}`;

        // Successful Call to create a new User (need to import the User Model.)
        const newUser = new User({
            username,
            name,
            password: encryptedPassword,
            avatar: avt
        });

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save(); // Push to MongoDB -> IMPORTANT

            // Return the new user created.
            res.status(200).json({
                username: newUser.username,
                name: newUser.name,
                avatar: newUser.avatar
            });
        } else {
            res.status(500).json({error: "Invalid User Data"});
        }

    } catch (error) {
        res.status(502).json({error: `Server Error, encountered ${error}`});
        console.log(error);
    }
    next();
}


export const login = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const findUser = await User.findOne({username});
        if (findUser) {
            const comparison = await bcryptjs.compare(password, findUser.password);
            if (comparison) {
                generateToken(findUser._id, res);
                res.status(200).json({username: findUser.username, message: `Authorized. Welcome ${findUser.name}`, avatar: findUser.avatar});
            } else {
                res.status(403).json({message: "Incorrect Password"});
            }
        } else {
            res.status(404).json({error: "User Not Found"});
        }
    } catch {
        res.status(500).json({error: "Server Error"});
        console.log(error);
    }
    next();
}


export const logout = (req, res, next) => {

    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Successfully Logged Out"});

    } catch {
        res.status(500).json({error: "Server Error"});
        console.log(error);
    }
    next();    
}
import jwt from 'jsonwebtoken';

// When old user comeback, they don't need to log in again.
const generateToken = (userID, res) => {
    const token = jwt.sign({userID}, process.env.JWT_KEY, {
        expiresIn: "15d"
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // Miliseconds,
        httpOnly: true, // Avoid hacking.
        sameSite: "strict",
        //secure: process.env.MODES !== "DEV"
    })
}

export default generateToken;
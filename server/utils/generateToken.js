import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../env_variables.js';

const generateCookieAndSetToken = (userId, res) => {
    const token = jwt.sign({userId}, JWT_SECRET , { expiresIn: '15d'});

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,//15 days to milliseconds
        httpOnly: true, //prevent cross side scripting attacks (cookie is not accessible by using javascript)
        sameSite:"strict", //prevents CSRF attacks (cross site request forgery)
        // secure: process.env.NODE_ENV !== "development"
    })
}

export default generateCookieAndSetToken; 
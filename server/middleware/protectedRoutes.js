import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const protectRoute = async(req, res, next) =>{
    try {
        const token = req.cookies.jwt;

        if(!token) return res.status(401).json({error: "Unauthorized - No token found-initially"});
        
        const decoded_token = jwt.verify(token, JWT_SECRET);
        if(!decoded_token) return res.status(401).json({error: "Unauthorized - No token found"});

        const user = await User.findById(decoded_token.userId).select("-password");
        if(!user) return res.status(401).json({error: "Unauthorized - User not found"});

        req.user = user;
        next();

    } catch (error) {
        console.log("error in protectRoute middleware: ", error.message);
        res.status(500).json({error: "error"})
    }
}

export default protectRoute;
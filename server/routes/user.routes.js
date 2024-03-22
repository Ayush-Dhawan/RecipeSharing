import express from "express";  
import protectRoute from "../middleware/protectedRoutes.js";
import User from "../models/user.model.js";

const router = express.Router();

router.post('/:username', getUserByUsername);

export default router;


async function getUserByUsername(req, res){
    const { username } = req.params;
    try {
        const user = await User.findOne({username: username});
        if(!user){
            throw new Error("could not find a user with provided username");
        }
        res.status(200).json(user);
        return user;
    } catch (error) {
        res.status(500).json(error.message);
    }
}
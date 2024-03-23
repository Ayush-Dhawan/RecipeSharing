import express from "express";  
import protectRoute from "../middleware/protectedRoutes.js";
import User from "../models/user.model.js";
import readRecipesOfGivenUser from "./recipeControllers/readRecipesOfGivenUser.js";
import getIDbyUsername, { getIDfromParams } from "./userControllers/getIDbyUsername.js";


const router = express.Router();

router.post('/:username', getUserByUsername);
router.put('/:username', updateUserProfile);
router.get(`/userID/`, getIDbyUsername)
router.get('/user/:username', getIDfromParams)
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

// async function updateUserProfile(req, res) {
//     const { username } = req.params;
//     const newData = req.body;

//     try {
//         // Find the user by username
//         const user = await User.findOne({ username: username });

//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }

//         // Update user profile based on data provided
//         Object.assign(user, newData);

//         // Save the updated user
//         await user.save();

//         return res.status(200).json({ message: "User profile updated successfully", user: user });
//     } catch (error) {
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// }

async function updateUserProfile(req, res) {
    const { username } = req.params;
    const { fullName, gender, profilePic } = req.body; // Destructure profilePic

    try {
        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update user profile based on data provided
        user.fullName = fullName;
        user.gender = gender;
        user.profilePic = profilePic; // Assign profilePic directly

        // Save the updated user
        await user.save();

        return res.status(200).json({ message: "User profile updated successfully", user });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}



import User from '../../models/user.model.js';

export default async function getIDbyUsername(username) {
    try {
        const user = await User.findOne({username});
        if(!user) throw new Error("unable to get user via username");
        return user._id;
    } catch (error) {
        console.log("error fetching id by username", error.message);
        throw new Error(error.message);
    }
}

export async function getIDfromParams(req, res){
    const username = req.params;
    try {
        const user = await User.findOne(username);
        if(!user) throw new Error("unable to get user via username");
        const userID = user._id;
        res.status(200).json({userID})
    } catch (error) {
        console.log("error fetching id by username", error.message);
        res.status(500).json("internal server error")
        throw new Error(error.message);
    }
}
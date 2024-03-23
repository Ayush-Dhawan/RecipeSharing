
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

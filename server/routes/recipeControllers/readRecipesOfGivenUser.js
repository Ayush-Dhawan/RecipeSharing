import Recipe from '../../models/recipeBlog.model.js';
import getIDbyUsername from '../userControllers/getIDbyUsername.js';

export default async function readRecipesOfGivenUser(req, res) {
    const username = req.params.username; // Access the username from req.params
    try {
        const user_id = await getIDbyUsername(username); // Await the promise
        const recipes = await Recipe.find({ authorID: user_id });

        res.status(200).json(recipes);
        return recipes;
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

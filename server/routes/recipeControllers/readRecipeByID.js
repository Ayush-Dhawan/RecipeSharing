import Recipe from "../../models/recipeBlog.model.js";

export default async function readRecipeByID(req, res) {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findById(id); // Find recipe by _id
        if (recipe) {
            res.status(200).json(recipe); // Send the fetched recipe as a JSON response
        } else {
            console.log("Recipe not found");
            res.status(404).json({ error: "Recipe not found" });
        }
        return recipe;
    } catch (error) {
        console.log("Error in recipe read controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

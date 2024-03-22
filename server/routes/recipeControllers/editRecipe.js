import Recipe from "../../models/recipeBlog.model.js";

export default async function editRecipe(req, res) {
    const { dishName, ingredients, recipe, image } = req.body;
    try {
        const { id: recipeID } = req.params;
        const recipeToUpdate = await Recipe.findOne({ _id: recipeID });

        if (!recipeToUpdate) {
            throw new Error("Recipe not found");
        }

        // Update the fields in the recipe document based on the provided values in req.body
        if (dishName) {
            recipeToUpdate.dishName = dishName;
        }
        if (ingredients) {
            recipeToUpdate.ingredients = ingredients;
        }
        if (recipe) {
            recipeToUpdate.recipe = recipe;
        }
        if (image) {
            recipeToUpdate.image = image;
        }

        // Save the updated recipe document
        const updatedRecipe = await recipeToUpdate.save();

        res.status(200).json(updatedRecipe);
    } catch (error) {
        console.log("Error in recipe edit controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

import Recipe from "../../models/recipeBlog.model.js";

const deleteRecipe = async (req, res) => {
    try {
        const recipeId = req.params.id; // Extract recipe ID from request parameters

        // Find the recipe by ID and delete it
        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);

        if (deletedRecipe) {
            res.status(200).json({
                message: 'Recipe deleted successfully',
                deletedRecipe: {
                    _id: deletedRecipe._id,
                    authorID: deletedRecipe.authorID,
                    dishName: deletedRecipe.dishName,
                    ingredients: deletedRecipe.ingredients,
                    recipe: deletedRecipe.recipe,
                    image: deletedRecipe.image
                }
            });
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        console.error("Error in deleteRecipe controller:", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default deleteRecipe;

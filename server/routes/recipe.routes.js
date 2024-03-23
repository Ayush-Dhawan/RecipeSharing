import express from "express";  
import protectRoute from "../middleware/protectedRoutes.js";
import addRecipe from "./recipeControllers/addRecipe.js";
import readRecipes from "./recipeControllers/readRecipes.js";
import editRecipe from "./recipeControllers/editRecipe.js";
import readRecipeByID from "./recipeControllers/readRecipeByID.js";
import readRecipesOfGivenUser from "./recipeControllers/readRecipesOfGivenUser.js";
import deleteRecipe from "./recipeControllers/deleteRecipe.js";



const router = express.Router();

router.get('/',  readRecipes);
router.get('/recipes/:username',  readRecipesOfGivenUser)
router.post('/add',addRecipe);
router.put('/edit/:id',  editRecipe);
router.get('/:id', readRecipeByID);
router.delete('/:id', deleteRecipe)



export default router;
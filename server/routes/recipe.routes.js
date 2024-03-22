import express from "express";  
import protectRoute from "../middleware/protectedRoutes.js";
import addRecipe from "./recipeControllers/addRecipe.js";
import readRecipes from "./recipeControllers/readRecipes.js";
import editRecipe from "./recipeControllers/editRecipe.js";
import readRecipeByID from "./recipeControllers/readRecipeByID.js";


const router = express.Router();

router.get('/',  readRecipes);
router.post('/add',addRecipe);
router.put('/edit/:id',  editRecipe);
router.get('/:id', readRecipeByID);



export default router;
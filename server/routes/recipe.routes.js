import express from "express";  
import protectRoute from "../middleware/protectedRoutes.js";
import addRecipe from "./recipeControllers/addRecipe.js";
import readRecipes from "./recipeControllers/readRecipes.js";
import editRecipe from "./recipeControllers/editRecipe.js";


const router = express.Router();

router.get('/', protectRoute, readRecipes);
router.post('/add',protectRoute, addRecipe);
router.put('/edit/:id', protectRoute, editRecipe);



export default router;
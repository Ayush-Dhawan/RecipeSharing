import express from "express";  
import protectRoute from "../middleware/protectedRoutes.js";
import addRecipe from "./recipeControllers/addRecipe.js";
import readRecipes from "./recipeControllers/readRecipes.js";


const router = express.Router();

router.post('/add',protectRoute, addRecipe);
router.get('/', protectRoute, readRecipes)



export default router;
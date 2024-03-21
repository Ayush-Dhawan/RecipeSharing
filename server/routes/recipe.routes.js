import express from "express";  
import protectRoute from "../middleware/protectedRoutes.js";
import addRecipe from "./recipeControllers/addRecipe.js";

const router = express.Router();

router.post('/add',protectRoute, addRecipe);



export default router;
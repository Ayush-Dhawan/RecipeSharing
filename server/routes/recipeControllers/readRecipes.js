import Recipe from "../../models/recipeBlog.model.js";

export default async function readRecipes(req, res) {
    try {
        const recipes = await Recipe.find({}); // Fetch all recipes from the database
        if(recipes)res.status(200).json(recipes); // Send the fetched recipes as a JSON response
        else console.log("could not fetch recipes")
    } catch (error) {
        console.log("Error in recipe read controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}



// export default async function hello(req, res){
//     res.status(200).json("hello")
// }
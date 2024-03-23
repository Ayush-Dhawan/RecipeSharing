import Recipe from "../../models/recipeBlog.model.js";
 
 const addRecipe = async(req, res)=> {
    try {
        const {authorID, dishName, ingredients, recipe, image} = req.body;


        const newRecipe = new Recipe({
            authorID,
            dishName,
            ingredients,
            recipe,
            image
        })

        if(newRecipe){
            await newRecipe.save();
            res.status(200).json({
                authorID: newRecipe.authorID,
                dishName: newRecipe.dishName,
                ingredients: newRecipe.ingredients,
                recipe: newRecipe.recipe,
                image: newRecipe.image
            })
        }else{
            console.log("invalid recipe data")
          }

    } catch (error) {
        console.log("Error in recipe add controller: ", error.message);
        res.status(500).json({error: `Internal server error ${authorID}`});
    }
}

export default addRecipe;
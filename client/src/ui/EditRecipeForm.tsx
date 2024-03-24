import React, { useState } from 'react'
import compressImage from '../utils/compressImage';
import ConvertCommaSeperatedStringToArray from '../utils/ConvertCommaSeperatedStringToArray';
import convertDotSeperatedStringToArray from '../utils/convertDotSeperatedStringToArray';
import useEditRecipe from '../hooks/recipe/useEditRecipe';

export default function EditRecipeForm({recipe}: {recipe: any}) {
    const [dishName, setDishName] = useState<string>(recipe.dishName);

    //since we recieve an array of strings we must first convert it to string to effectively pass it in text area
    const initialIngredients = Array.isArray(recipe.ingredients) ? recipe.ingredients.join(",") : "";
    const [Ingredients, setIngredients] = useState<string>(initialIngredients);

    const initialRecipe = Array.isArray(recipe.recipe) ? recipe.recipe.join(".") : "";
    const [Recipe, setRecipe] = useState<string>(initialRecipe);
    const [image, setImage] = useState<string>(recipe.image);
    const recipeID = recipe._id;

    const {editRecipe} = useEditRecipe();

    //for edit recieve recipe prop...change handler function to edit the one with id thats it

    async function handleFile(e: any){
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
        reader.addEventListener("load", async ()=>{
          const compressedDataUrl = await compressImage(reader.result);
          setImage(compressedDataUrl);
        })
    }

    function handleSubmit(e: any){
        e.preventDefault();
        const ingredients = ConvertCommaSeperatedStringToArray(Ingredients);
        const recipe = convertDotSeperatedStringToArray(Recipe);
        //@ts-ignore
        editRecipe({recipeID, dishName, ingredients, recipe, image});
        const modal = document.getElementById(`my_modal_${recipeID}${recipeID}`) as HTMLDialogElement;
        modal.close();
    }
        
  return (
    <form id='edit-recipe-form' onSubmit={handleSubmit} className="card-body styled-scrollbar">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Dish Name</span>
      </label>
      <input type="text" value={dishName}  onChange={(e)=>setDishName(e.target.value)}  placeholder="dishname..." className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Ingredients</span>
      </label>
      <textarea value={Ingredients} onChange={(e: any)=>setIngredients(e.target.value)}  placeholder="Ingredients (comma seperated)" className="input input-bordered h-24 styled-scrollbar" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Recipe</span>
      </label>
      <textarea value={Recipe} onChange={(e: any)=>setRecipe(e.target.value)}  placeholder="Recipe steps" className="input input-bordered h-36 styled-scrollbar" required />
    </div>
    <div className="form-control flex items-center justify-center">
    <input onChange={handleFile} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
    </div>
    <div className="form-control mt-2">
      <button className="btn btn-primary">Save Changes</button>
    </div>
  </form>
  )
}

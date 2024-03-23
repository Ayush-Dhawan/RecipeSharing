import React, { useState } from 'react'
import ConvertCommaSeperatedStringToArray from '../utils/ConvertCommaSeperatedStringToArray';
import convertDotSeperatedStringToArray from '../utils/convertDotSeperatedStringToArray';
import compressImage from '../utils/compressImage';
import useAddRecipe from '../hooks/recipe/useAddRecipe';
import useGetIDbyUsername from '../hooks/users/useGetIDbyUsername';

export default function AddRecipeForm() {
  const currentUrl = window.location.href;
  // Split the URL by "/"
    const urlParts = currentUrl.split("/");
   // The last part of the URL should be the ID
    const username = urlParts[urlParts.length - 1];

    const {id} = useGetIDbyUsername(username);
    const authorID = id?.userID;

    const [dishName, setDishName] = useState<string>("");
    const [Ingredients, setIngredients] = useState<string>("");
    const [Recipe, setRecipe] = useState<string>("");
    const [image, setImage] = useState<string>("");

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

      const {addRecipe, isAddingRecipe} = useAddRecipe();

    function handleSubmit(e: any){
        e.preventDefault();
        const ingredients = ConvertCommaSeperatedStringToArray(Ingredients);
        const recipe = convertDotSeperatedStringToArray(Recipe);
        //@ts-ignore
        addRecipe({authorID, dishName, ingredients, recipe, image})
    }
  return (
    <form onSubmit={handleSubmit} className="card-body styled-scrollbar">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Dish Name</span>
          </label>
          <input type="text" value={dishName} onChange={(e)=>setDishName(e.target.value)}  placeholder="dishname..." className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ingredients</span>
          </label>
          <textarea onChange={(e)=>setIngredients(e.target.value)}  placeholder="Ingredients (comma seperated)" className="input input-bordered h-24 styled-scrollbar" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe</span>
          </label>
          <textarea onChange={(e)=>setRecipe(e.target.value)}  placeholder="Recipe steps" className="input input-bordered h-36 styled-scrollbar" required />
        </div>
        <div className="form-control flex items-center justify-center">
        <input onChange={handleFile} type="file" required className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-primary">Post</button>
        </div>
      </form>
  )
}

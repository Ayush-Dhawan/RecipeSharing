import React from 'react'
// @ts-ignore
import useGetRecipeByID from '../hooks/recipe/useGetRecipeByID';
import { NavLink, useNavigate } from 'react-router-dom';

export default function ParticularRecipe() {
  const navigate = useNavigate();
  // Get the current URL
  const currentUrl = window.location.href;

  // Split the URL by "/"
  const urlParts = currentUrl.split("/");

  // The last part of the URL should be the ID
  const id = urlParts[urlParts.length - 1];

  const {recipe, isGettingRecipe} = useGetRecipeByID(id)


  if(isGettingRecipe) return(
    <div className='h-screen w-screen flex items-center justify-center bg-[#574128]'>
        <span className="loading loading-ring loading-lg"></span>
    </div>
  )

  if(!localStorage.getItem('username-recipe-app')) navigate('/login')

  return (
<div className='h-screen w-screen flex items-center justify-center bg-base-content'>
<div className="card lg:card-side h-[90%] w-[90%] bg-base-100 shadow-xl card-scrollbar-hide overflow-scroll">
<figure className=' w-[40%] rounded-md flex items-center justify-center'>
  <img className='rounded-md' src={recipe?.image} alt="Album" />
</figure>

  <div className="card-body ">
    <h2 className="card-title text-3xl">{recipe?.dishName}</h2>
    <h3 className='text-xl font-semibold'>Ingredients</h3>
   <ul className='styled-scrollbar overflow-y-auto'>
    {recipe?.ingredients?.map((ingredient: string, index:number) => <li key={index}>{ingredient}</li>)}
   </ul>
<hr />
   <h3 className='text-xl font-semibold'>Recipe</h3>
   <ul className='styled-scrollbar overflow-y-auto'>
    {recipe?.recipe?.map((step: string, index: number) => <li className='my-1' key={index}>{`${(index + 1).toString().padStart(2, '0')}. ${step}`}</li>)}
   </ul>


    <div className="card-actions justify-end">
      {/* @ts-ignore */}
      <NavLink to={-1}><button className="btn btn-primary">Back</button></NavLink>
    </div>
  </div>
</div>
</div>
  )
}

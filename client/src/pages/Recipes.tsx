import React from 'react'
import Navbar from '../ui/Navbar'
import RecipeCard from '../ui/RecipeCard'
import useGetRecipes from '../hooks/recipe/useGetRecipes'
import { useNavigate } from 'react-router-dom'

export default function Recipes() {
  const navigate = useNavigate();
    const {recipes} = useGetRecipes();
    console.log("recipes:", recipes)

    if(!localStorage.getItem('username-recipe-app')) navigate('/login')
  return (
    <>
      <Navbar />
      <div className=' h-[3vh] bg-base-200 p-5'>
        <p className='font-bold uppercase text-3xl'>recipes</p>
      </div>
      <div className="hero min-h-screen bg-base-200 mt-0 sm:-mt-12">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
          {recipes?.map((recipe: any )=> {
            return <RecipeCard recipe={recipe} />
          })}
        </div>
      </div>
    </>
  )
}

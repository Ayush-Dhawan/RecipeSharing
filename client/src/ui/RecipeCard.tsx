import React from 'react'
import { NavLink } from 'react-router-dom'

export default function RecipeCard({recipe}: {recipe: any}) {
  return (
    <div className="card w-80 m-4 bg-base-100 shadow-xl image-full">
  <figure ><img src={recipe?.image} alt="image"  className="object-cover" /></figure>
  <div className="card-body">
    <div className='flex flex-col h-full justify-between items-center'>
            <h2 className="card-title">{recipe.dishName}</h2>
            <div className="card-actions justify-end">
            <NavLink to={`/recipe/${recipe._id}`}><button className="btn btn-primary">Check recipe</button></NavLink>
            </div>
    </div>
  </div>
</div>
  )
}

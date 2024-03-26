import React from 'react'
import useGetRecipesOfaUser from '../hooks/recipe/useGetRecipesOfaUser'
import AddRecipeModal from './AddRecipeModal';
import DeleteRecipeModal from './DeleteRecipeModal';
import EditRecipeModal from './EditRecipeModal';

export default function RecipesTable() {
  const currentUrl = window.location.href;
// Split the URL by "/"
  const urlParts = currentUrl.split("/");
 // The last part of the URL should be the ID
  const username = urlParts[urlParts.length - 1];

  const {data} = useGetRecipesOfaUser(username);
  return (
    <div className="overflow-x-auto w-[50vw]">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Your Recipes</th>
        {/* <th><button className="btn btn-ghost btn-sm">Add new recipe</button></th> */}
        <th><AddRecipeModal /></th>
      </tr>
    </thead>
    <tbody className='overflow-y-auto styled-scrollbar'>
      {/* row 1 */}
      {data?.map((recipe: any) => {
        return(
          <tr>
        <th>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={recipe.image} alt="image" />
              </div>
            </div>
            <div>
              <div className="font-bold capitalize">{recipe.dishName}</div>
              {/* <div className="text-sm opacity-50">United States</div> */}
            </div>
          </div>
        </td>
        
        
        <th>
          <EditRecipeModal recipe={recipe} />
          <DeleteRecipeModal recipeID={recipe._id}/>
        </th>
      </tr>
        )
      })}
      


    </tbody>
    {/* foot */}

    
  </table>
</div>
  )
}

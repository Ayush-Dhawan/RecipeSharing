import React from 'react'

export default function RecipesTable() {
  return (
    <div className="overflow-x-auto w-[50vw]">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Recipe</th>
        <th><button className="btn btn-ghost btn-sm">Add new recipe</button></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">DishName</div>
              {/* <div className="text-sm opacity-50">United States</div> */}
            </div>
          </div>
        </td>
        
        
        <th>
          <button className="btn btn-ghost btn-xs">edit</button>
          <button className="btn btn-ghost btn-xs">delete</button>
        </th>
      </tr>
      


    </tbody>
    {/* foot */}

    
  </table>
</div>
  )
}

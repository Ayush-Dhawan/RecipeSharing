import React from 'react'
import EditRecipeForm from './EditRecipeForm'

export default function EditRecipeModal({recipe}: {recipe: any}) {
    const recipeID = recipe._id;
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* @ts-ignore */}
<button className="btn text-gray-600 bg-green-400 btn-xs" onClick={()=>document.getElementById(`my_modal_${recipeID}${recipeID}`).showModal()}>Edit Recipe</button>
<dialog id={`my_modal_${recipeID}${recipeID}`} className="modal ">
  <div className="modal-box w-11/12 max-w-5xl styled-scrollbar">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Edit your recipe</h3>
    <EditRecipeForm recipe={recipe} />
  </div>
</dialog>
    </div>
  )
}

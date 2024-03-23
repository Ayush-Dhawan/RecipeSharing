import useDeleteRecipe from "../hooks/recipe/useDeleteRecipe";


export default function DeleteRecipeModal({recipeID}: {recipeID: string}) {
    // @ts-ignore
    const {deleteRecipe, isDeletingRecipe} = useDeleteRecipe(recipeID);
    function handleDelete(e: any){
        e.preventDefault();
        deleteRecipe();
        const modal = document.getElementById(`my_modal_${recipeID}`) as HTMLDialogElement;
        modal.close();
    }
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* @ts-ignore */}
        <button className="btn btn-ghost btn-xs" onClick={()=>document.getElementById(`my_modal_${recipeID}`).showModal()}>Delete Recipe</button>
        <dialog id={`my_modal_${recipeID}`} className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm <span className='text-red-500'>Deleting</span> the recipe!</h3>
            <p className="py-4">Deletions can't be undone.</p>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <div className='flex gap-4'>
                    <button onClick={handleDelete} disabled={isDeletingRecipe} className="btn  text-red-500">Delete</button>
                    <button className="btn">Don't Delete</button>
                </div>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  )
}

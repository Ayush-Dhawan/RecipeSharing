
import AddRecipeForm from './AddRecipeForm';

export default function AddRecipeModal() {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* @ts-ignore */}
      <button className="btn btn-primary btn-md" onClick={() => document.getElementById('my_modal_2').showModal()}>Add new recipe</button>
      <dialog id="my_modal_2" className="modal w-full ">
        <div className="modal-box w-11/12 max-w-5xl  styled-scrollbar overflow-auto">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Post a new Recipe</h3>
          <AddRecipeForm />
        </div>
      </dialog>
    </div>
  );
}

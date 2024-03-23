
import EditProfileForm from './EditProfileForm'

export default function EditProfileModal({user}: {user: any}) {
  return (
    <div>
        {/* @ts-ignore */}
        <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Edit Profile</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Edit your profile!</h3>
    <EditProfileForm user={user} />
  </div>
</dialog>
    </div>
  )
}

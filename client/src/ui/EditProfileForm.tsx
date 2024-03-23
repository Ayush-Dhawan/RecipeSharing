import React, { useEffect, useState } from 'react'
import useUpdateUser from '../hooks/users/useUpdateUser';

import compressImage from '../utils/compressImage';

export default function EditProfileForm({user}: {user:any}) {
  
  
  const [username, setusername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [ profilePic, setProfilePic] = useState<any>("");
  const [gender, setGender] = useState<string>("");
  
  useEffect(() => {
    if (user) {
      setusername(user.username);
      setFullName(user.fullName);
      setProfilePic(user.profilePic);
      setGender(user.gender);
    }
  }, [user]);

  async function handleFile(e: any){
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener("load", async ()=>{
      const compressedDataUrl = await compressImage(reader.result);
      setProfilePic(compressedDataUrl);
    })
    
  }

  const {updateUser, isUpdatingUser} = useUpdateUser(username, fullName, gender, profilePic);
  function handleSubmit(e: any){
    e.preventDefault();
        //@ts-ignore
        updateUser();
        const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
        modal.close();
    }
    return (
      <div>
        {user ? (
          <div className="hero bg-base-200">
            <div className="hero-content flex flex-col">
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">fullName</span>
                      </label>
                      <input
                        value={fullName}
                        type="text"
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">username</span>
                      </label>
                      <input
                        value={username}
                        type="text"
                        placeholder="username"
                        className="input input-bordered"
                        disabled
                      />
                    </div>
                  </div>
    
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Profile Picture</span>
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                      onChange={handleFile}
                    />
                    {profilePic === "" ? "" : <img height={50} width={50} src={profilePic} /> }
                    {/* <ImageInput setState={setProfilePic} /> */}
                  </div>
    
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Gender</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex gap-3">
                        <input
                          onClick={() => setGender("male")}
                          type="radio"
                          name="radio-5"
                          className="radio radio-success"
                        />
                        <span>Male</span>
                      </div>
                      <div className="flex gap-3">
                        <input
                          onClick={() => setGender("female")}
                          type="radio"
                          name="radio-5"
                          className="radio radio-success"
                        />
                        <span>Female</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">{isUpdatingUser ? <span className="loading loading-bars loading-sm"></span> : "Save Changes"}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
    
}

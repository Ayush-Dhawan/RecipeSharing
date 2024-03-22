import React, { useState } from 'react'
import { useLogin } from '../hooks/auth/useLogin';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { useSignUp } from '../hooks/auth/useSignUp';

export default function Signup() {
    const [username, setusername] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [gender, setGender] = useState<string>("");

    const {signUp} = useSignUp(username, fullName, password, confirmPassword, gender);

    function handleSubmit(e: any){
      console.log(username, fullName, password, confirmPassword, gender)
        e.preventDefault();
        if(!username || !password || !fullName || !confirmPassword || !gender) {
            toast.error("please fill in the form before submitting");
            return;
        }
        //@ts-ignore
        signUp();
    }
  return (
    <div className="hero  min-h-screen bg-base-200">
  <div className="hero-content  flex flex-col w-[90vw]">
    <div className="text-center lg:text-left ">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Register to access delicious recipes and share some of yours with the community!</p>
    </div>
    <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit} className="card-body ">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className="form-control">
            <label className="label">
              <span className="label-text">fullName</span>
            </label>
            <input type="text" onChange={(e) => setFullName(e.target.value)} placeholder="Full name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">username</span>
            </label>
            <input type="text" onChange={(e) => setusername(e.target.value)} placeholder="username" className="input input-bordered" required />
          </div>
      </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Confirm Password</span>
              </label>
              <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" className="input input-bordered text-sm" required />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex gap-3'><input onClick={() => setGender("male")} type="radio" name="radio-5" className="radio radio-success"  /><span>Male</span></div>
              <div className='flex gap-3'><input onClick={() => setGender("female")} type="radio" name="radio-5" className="radio radio-success"  /><span>Female</span></div>
          </div>
          {/* <input type="text" id='username' placeholder="Email here" className="input input-bordered input-success w-full " onChange={(e) => setUsername(e.target.value)} required /> */}
        </div>
          <label className="label">
            <NavLink to="/login"><span className="label-text-alt link link-hover">Already have an account?</span></NavLink>
          </label>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

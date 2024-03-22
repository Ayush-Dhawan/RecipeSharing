import React, { useState } from 'react'
import { useLogin } from '../hooks/auth/useLogin';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

export default function Login() {
    const [username, setusername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const {login} = useLogin(username, password);

    function handleSubmit(e: any){
        e.preventDefault();
        if(!username || !password) {
            toast.error("please fill in the form before submitting");
            return;
        }
        //@ts-ignore
        login();
    }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Login in to access delicious recipes and share some of yours with the community!</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">username</span>
          </label>
          <input type="text" onChange={(e) => setusername(e.target.value)} placeholder="username" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
          <label className="label">
            <NavLink to="/signup"><span className="label-text-alt link link-hover">Do not have an account?</span></NavLink>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

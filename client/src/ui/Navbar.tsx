import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  let user = localStorage.getItem('username-recipe-app');
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState<Boolean>(false);
  

  useEffect(()=>{
    if(user) setLoggedIn(true);
  else setLoggedIn(false);
  }, [])

  function handleLogout(e: any){
    e.preventDefault();
    localStorage.removeItem('username-recipe-app')
    user = localStorage.getItem('username-recipe-app')
    // window.location.reload(); // Reload the page after logout
    navigate('/login');
  }
  

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to="/">HomePage</NavLink></li>
        <li><a>Share a recipe</a></li>
        <li><NavLink to="/recipes">Check recipes</NavLink></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">RecipeShare</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    {loggedIn && <button className="btn btn-ghost btn-circle">
      <div>
      <NavLink to={`/user/${user}`}><FaUserCircle size="1.7rem"  /></NavLink>
      </div>
    </button>}
    <button className="btn btn-ghost btn-circle">
      <div >
      {!loggedIn ? <NavLink to={'/login'}><IoLogIn size={'1.7rem'}/></NavLink> : <IoLogOut onClick={handleLogout} size={'1.7rem'}/>}
      </div>
    </button>
  </div>
</div>
  )
}

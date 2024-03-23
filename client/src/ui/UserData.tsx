import React from 'react'
import useGetUserByUsername from '../hooks/users/useGetUserByUsername'
import EditProfileModal from './EditProfileModal';

export default function UserData() {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split("/");    // Split the URL by "/"
    const username = urlParts[urlParts.length - 1];// The last part of the URL should be the username

    const {user} = useGetUserByUsername(username);
    console.log(user)
  return (
    <div className="hero-content flex-col lg:flex-row  shadow-md shadow-primary rounded-lg">
    <img src={user?.profilePic} className="max-w-sm h-32  rounded-xl shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your profile!</h1>
      <p className="py-2 flex justify-between items-center"><span className='font-semibold'>Full Name:</span> <span className='uppercase text-sm'>{user?.fullName}</span></p>
      <p className="py-2 flex justify-between items-center"><span className='font-semibold'>UserName:</span> <span className='text-sm'>{user?.username}</span></p>
      <p className="py-2 flex justify-between items-center"><span className='font-semibold'>Gender:</span> <span className='uppercase text-sm'>{user?.gender}</span></p>
      <div className='flex justify-end'><EditProfileModal user={user} /></div>
    </div>
  </div>
  )
}

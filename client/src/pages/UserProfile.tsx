import React from 'react'
import Navbar from '../ui/Navbar'
import UserData from '../ui/UserData'
import RecipesTable from '../ui/RecipesTable'

export default function userProfile() {
  return (
    <>
      <Navbar />
    <div className="hero min-h-[90vh] bg-base-200 flex flex-col md:flex-row p-4 items-center md:items-start justify-between gap-6 ">
    <UserData />
    <RecipesTable />
    </div>
    </>
  )
}

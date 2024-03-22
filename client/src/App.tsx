import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipes from './pages/Recipes'
import Navbar from './ui/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ParticularRecipe from './pages/ParticularRecipe'

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60*1000
        staleTime: 0
      }
    }
  })

  return (
    <>  
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipe/:id' element={<ParticularRecipe />} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App

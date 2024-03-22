
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipes from './pages/Recipes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Toaster} from 'react-hot-toast'
import ParticularRecipe from './pages/ParticularRecipe'
import Login from './pages/Login'
import Signup from './pages/Signup'

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
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipe/:id' element={<ParticularRecipe />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" gutter = {10} containerStyle={{ margin: "5px"}} toastOptions = {{
        success: {
          duration: 3000
        },
        error: {
          duration: 5000
        },
        style: {
          fontSize: '14px',
          maxWidth: '500px',
          padding: '16px 24px',
          backgroundColor: '--var(--color-grey-0)',
          color: '--var(--color-grey-700)'
        }
      }} />
      </QueryClientProvider>
    </>
  )
}

export default App

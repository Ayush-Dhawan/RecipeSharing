
import { NavLink } from 'react-router-dom'
import Navbar from '../ui/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-[35rem]">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">"Join our vibrant recipe sharing community! Explore a world of culinary delights as you browse through a diverse collection of user-generated recipes. Share your own culinary creations and inspire others to embark on flavorful journeys."</p>
      <NavLink to={'/recipes'}><button className="btn btn-primary">Get Started</button></NavLink>
    </div>
  </div>
</div>
    </>
  )
}

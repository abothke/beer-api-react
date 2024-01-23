import { Routes, Route } from 'react-router-dom'
import './App.css'
import Beers from './pages/Beers'
import Home from './pages/Home'
import BeerDetails from './assets/components/beerDetails/BeerDetails'

function App() {

  return (
    <>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
      </Routes>
    </>
  )
}

export default App

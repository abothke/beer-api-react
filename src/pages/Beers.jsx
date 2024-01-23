import axios from 'axios'
import { useEffect, useState } from 'react'
import BeerCard from '../assets/components/beerCard/BeerCard'
import Nav from '../assets/components/nav/Nav'
import './beers.css'

function Beers() {
    const [beers, setBeers] = useState([])
    const apiURL = 'https://ih-beers-api2.herokuapp.com/beers/'
    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get(apiURL)
            setBeers(response.data)
        }
        fetchApi()
    }, [])
  return (
    <>
    <div className="beers">
    {beers.map((beer, index) => {
        return (
        <>
            <BeerCard
            beer={beer}
            index={index}
            />
        </>
        )
    })}
    </div>
    <Nav />
    </>
  )
}

export default Beers
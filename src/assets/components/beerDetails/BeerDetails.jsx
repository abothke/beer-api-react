import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Nav from "../nav/Nav"
import './beerDetails.css'

function BeerDetails() {
    const { id } = useParams()
    const [beer, setBeer] = useState({})
    console.log(id);
    const apiURL = id == 'random' ? `https://ih-beers-api2.herokuapp.com/beers/random` : `https://ih-beers-api2.herokuapp.com/beers/${id}`

    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get(apiURL)
            console.log(response.data);
            setBeer(response.data)
        }
        fetchApi()
    }, [])
    
  return (
    <>
    <div className="beer-details">
        <img class="beer-details-img" width={50} src={beer.image_url} alt={beer.name} />
        <div className="beer-details-info">
        <h1>{beer.name}</h1>
        <h3>{beer.tagline}</h3>
        <p>first brewed: {beer.first_brewed}</p>
        <p>attenuation level: {beer.attenuation_level}</p>
        <p>{beer.description}</p>
        {beer.contributed_by ? (<p>{beer.contributed_by.split('<')[0]}</p>) : (null)}
        </div>
    </div>
    <Nav />
    </>
  )
}

export default BeerDetails
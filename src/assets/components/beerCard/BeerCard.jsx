import React from 'react'
import { Link } from 'react-router-dom'
import './beerCard.css'

function BeerCard({beer}, {index}) {
  return (
    <>
    <div key ={index} className="beer-card">
    <div className="beer-card-img">
    <img width={50} src={beer.image_url} alt={beer.name} />
    </div>
    <div className="beer-card-info">
    <h2>{beer.name}</h2>
    <h3>{beer.tagline}</h3>
    {beer.contributed_by ? (<p>{beer.contributed_by.split('<')[0]}</p>) : (null)}
    <Link to={`/beers/${beer._id}`}><button>Details</button></Link>
    </div>
    </div>
    <hr/>
    </>
  )
}

export default BeerCard
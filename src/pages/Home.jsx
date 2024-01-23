import React from 'react'
import Nav from '../assets/components/nav/Nav'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>
        <Link to="/beers"><h2>All Beers</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
    </div>
    <div>
        <Link to="/beers/random"><h2>Random Beer</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
    </div>
    </>
  )
}

export default Home
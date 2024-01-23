import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <footer>
    <Link to="/"><button>Home</button></Link>
    </footer>
  )
}

export default Nav
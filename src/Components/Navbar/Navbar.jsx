import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <div>
            <h2>Logo</h2>
        </div>

        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/contact'}><li>Contact</li></Link>
            <li>About</li>
        </ul>


        <div>
            <p>Login</p>
        </div>
        
    </div>
  )
}

export default Navbar
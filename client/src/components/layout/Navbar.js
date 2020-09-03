import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-dark topOne">
                <h1>
                    <Link to='/'>Developer Job Tracker</Link>
                </h1>
                <ul>
                    <li><a href="!#">Developers</a></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}


export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import Curriculum from '../../images/curriculum-vitae.png';

const Navbar = () => {
  return (
    <div>
        <nav class = "navbar bg-white">
            <div class="container">
                <div class = "navbar-content">
                    <div class = "brand-and-toggler">
                        <a href = "/" class = "navbar-brand">
                            <img src = {Curriculum} alt = "" class = "navbar-brand-icon"/>
                            <span class = "navbar-brand-text"/>build <span>resume.</span>
                        </a>
                        <div>
                            <nav className="">
                                <ul className="navbar-list">
                                    <li className="navbar-item">
                                        <Link to="/" className='navbar-link'>Home</Link>
                                    </li>
                                    <li className="navbar-item">
                                        <Link to="/parentcomponent" className='navbar-link'>Details</Link>
                                    </li>
                                    <li className="navbar-item">
                                        <Link to="/aboutpage" className='navbar-link'>About</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
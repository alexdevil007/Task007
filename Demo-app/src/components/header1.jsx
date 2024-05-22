import React from 'react'
import './header1.css'
import '../pages/home'
import '../pages/about'
import '../pages/services'
import '../pages/contact'
import '../pages/exit'

const Header1 = () => {
  return (
    <div>
        <header>
            <h1>DEVIL</h1>
            <ul>
                <li><a href='/Home'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/services'>Services</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/exit'>Exit</a></li>
            </ul>
        </header>
    </div>
  )
}

export default Header1
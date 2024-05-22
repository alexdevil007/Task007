import React from 'react'
import './header.css'
import '../pages/home'

const Header = () => {
  return (
    <div className='header'>
        <h1 className='heading'>ALEX CITY</h1>
        <ul className='lists'>
            <li><a href='/home'>Home</a></li>
            <li><a>Service</a></li>
            <li><a>menu</a></li>
            <li><a>lists</a></li>
            <li><a>links</a></li>
            <li><a>Magic</a></li>
        </ul>
    </div>
  )
}

export default Header
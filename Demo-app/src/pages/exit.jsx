import React from 'react'
import Header1 from '../components/header1'
import './exit.css'
import Home from './home'

const Exit = () => {
  return (
    <div>
         <Header1/>
        <div className='container3'>
        <div className='left3'>
        <h2>WAY OF EXIT !</h2>
        <div className='buttondiv'><button className='exitbutton' onClick={<Home/>}>Exit</button></div>
        </div>
       
        </div>
    </div>
  )
}

export default Exit
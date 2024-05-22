import React from 'react'
import Header1 from '../components/header1'
import './services.css'
import { useState } from 'react'

const Services = () => {
  const [input4,setInput4]=useState("")
  return (
    <div> 
        <Header1/>
        <div className='container4'>
        <div className='left4'>
        <h2>WELCOME TO OUR SERVICE PAGE !</h2>
        <div>
           <input className='input4' typeof='text' onClickCapture={(e)=>setInput4.(e.target.value)}></input>
           <p>{input4}</p>
        </div>
        </div>
       
        </div>
    </div>
  )
}

export default Services
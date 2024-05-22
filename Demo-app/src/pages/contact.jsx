import React, { useState } from 'react'
import Header1 from '../components/header1'
import './contact.css'


const Contact = () => {
  const [input,setInput]=useState("")
  const [input1,setInput1]=useState("")
  const [input2,setInput2]=useState("")
  const [input3,setInput3]=useState("")
  return (
    <div> 
         <Header1/>
        <div className='container2'>
        <div className='left2'>
          <div className='top'>
        <div className='lefttext'>
          <h6 className='welcome'>Welcome</h6>
          <h2 className='creative'>I Have <span className='green'> creative <br/> Design </span> Experience</h2>
          <h6 className='intro'>I'm {input}, a creative product Designer, I've been helping business <br/>so solve their problems with my design for 2 years</h6>
          <div className='leftbuttons'><button className='contactme1'>Contact Me</button><button className='contactme'>View portfolio</button></div>
        </div>
        <div className='profile'><div className='form'><h2>INPUT AREA DUDE !</h2>
        <div className='inputsec'><p className='name'>Name:</p><input type="text" className='inputarea' onChange={(e)=>setInput(e.target.value)} /></div>
        <div className='inputsec'><p className='name'>Satisfied clients:</p><input type="number" className='inputarea' onChange={(e)=>setInput1(e.target.value)}/></div>
        <div className='inputsec'><p className='name'>Projects completed:</p><input type="number" className='inputarea' onChange={(e)=>setInput2(e.target.value)}/></div>
        <div className='inputsec'><p className='name'>Reviews given:</p><input type="number" className='inputarea' onChange={(e)=>setInput3(e.target.value)}/></div>
        </div>
        </div>
        </div>
        <div className='textinputbuttom'>
  
          <div className='bars'><p className='one'>{input1}+</p><p className='onetext'>Satisfied clients</p></div>
          <div className='bars'><p className='one'>{input2}+</p><p className='onetext'>Projects completed</p></div>
          <div className='bars'><p className='one'>{input3}+</p><p className='onetext'>Reviews given</p></div>
        </div>
        </div>
          
          </div>   
    </div>
  )
}
<h1>contact</h1>
export default Contact
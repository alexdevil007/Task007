import './alex.css'
import React,{useState} from 'react'


const Alex = () => {
    const [color,setcolor]=useState("bus2")
    const [text,settext]=useState("Change another bus !")

    const handleClick=()=>{
      setcolor('bus')
      settext("change previous bus !!")
    }

    const handleClick2=()=>{
      setcolor('bus2')
      settext("Change another bus !")
    }
  
  return (
    <div className='alex'>
      <div className='welcome'><h1>Welcome to our Devil !</h1></div>
      
      <div className='image'><div className={color} ></div><div className='bike'></div><button className='button' onClick={handleClick} onDoubleClick={handleClick2}>{text}</button></div>
      
    </div>
  )
}

export default Alex
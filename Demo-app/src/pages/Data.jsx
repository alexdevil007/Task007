import React from 'react'
import { useState } from 'react'

const Data = () => {
    const [Products] = useState([
        {Id:1,Name:chicken,price:100},
        {Id:1,Name:chicken,price:100},
        {Id:1,Name:chicken,price:100},
    ]);

    const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (

    <div><about/></div>
  )
}

export default Data
import React from 'react'
import manish from "./manish.jpg"

const Card = () => {
  return (
    <div className='card'>
        <img src={manish} alt=""  className='img'/>
        <h2>Manish kumar singh</h2>
        <p>I am developer and creative. Learing skill to surprise all. </p>
    </div>
  )
}

export default Card
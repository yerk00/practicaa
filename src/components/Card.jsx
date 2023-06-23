import React from 'react'
import Title from '../components/Title'
import Button from './Button'
import Calificacion from './Calificacion'
import './Card.css'
import Font from './Font'
export const Card = () => {
  return (
    <div className='container-dos'>
        {/* <Title/> */}
        <Font/>
        <Title/>
        <Calificacion/>
        <Button/>
    </div>
  )
}

export default Card
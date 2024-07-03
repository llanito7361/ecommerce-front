import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrum = ({product}) => {
  // if (!product){
    //   <>product no encontrado che</>
    // }

    
  return (
    <div className='breadcrum'>
        JOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt="" /> {product.name} 
    </div>
  )
}

export default Breadcrum
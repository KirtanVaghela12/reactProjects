import React from 'react'
import onePiece from '../../assets/onePiece.jpg'

const Cards = ({image,name,title}) => {
  return (
    <div className='flex text-center w-103 m-8 h-125'>
        <div className='transition-transform duration-300 hover:scale-105 border p-3 rounded-2xl '>
            <img  className='w-100 rounded h-50 '  src={image}/>
            <div className='text-2xl font-bold mt-4 text-center'>{name}</div>
            <div className='text-gray-600 text-sm leading-relaxed mt-2'>{title}</div>
        </div>
    </div>
  )
}

export default Cards
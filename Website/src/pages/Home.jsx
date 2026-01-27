import React from 'react'
import onePiece from "../assets/onePiece.avif"
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex w-full h-125'>
      <img src={onePiece} alt='Straw Hat Pirates' className='w-250 h-125 '/>
      <div className='flex items-center justify-center w-1/2'>
      <div className='text-center'>
        <div className='font-bold text-3xl -mb-3'>Straw Hat Crew</div>
        <div className='font-medium text-xl p-4 mb-5'>Click below to know more about Straw Hat's !</div>
        <NavLink to="/about" className="bg-red-500 text-white p-5 px-7 rounded-full hover:bg-red-300"><input type='button' value="Know More"/></NavLink>
      </div>
    </div>
    </div>
  )
}

export default Home
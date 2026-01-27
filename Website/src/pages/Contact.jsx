import React from 'react'
import Join from '../assets/Join.jpg'
import { IoIosMail } from "react-icons/io";

import { useForm } from "react-hook-form"

const Contact = () => {

  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat pt-28 flex items-center justify-center" style={{ backgroundImage: `url(${Join})` }}>
        <div>
          <h1 className='flex justify-center mb-7 font-bold text-5xl w-200 text-[#112A46]'>Join Straw Hats pirate's crew!</h1>
          <h1 className='flex justify-center ml-25 font-bold text-4xl w-150 text-[#112A46]'>Be the part of the greatest journey in finding Legendary One Piece..</h1>
        </div>
      </div>
      <div className='min-h-[75vh] bg-gray-600 text-white'>
        <div className='flex justify-evenly'>
          <div className='mt-20'>
            <IoIosMail size={50} />
            <h1 className='font-semibold text-2xl mb-2'>For more details contact me!</h1>
            <div className='font-semibold text-xl mb-4 underline cursor-pointer hover:opacity-50'>vaghelakirtan16@gmail.com</div>
            <div className='font-semibold text-xl'>You can also fill the form to contact me </div>
          </div>
          <div className='mt-20'>
            <div >
              <h2 className=" text-3xl font-semibold mb-6">
          Contact
        </h2>

        {/* Name row */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm  mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b  focus:outline-none "
            />
          </div>

          <div>
            <label className="block text-sm  mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b  focus:outline-none "
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm  mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            className="w-full bg-transparent border-b  focus:outline-none "
          />
        </div>

        {/* Message */}
        <div className="mb-8">
          <label className="block text-sm  mb-2">
            Write a message
          </label>
          <textarea
            rows="3"
            className="w-full bg-transparent border-b resize-none focus:outline-none "
          />
        </div>

        {/* Button */}
        <button className="bg-[#5c6a8d] text-white px-8 py-2 rounded-full hover:bg-[#4a5775] transition">
          Submit
        </button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

{/* <h1 className='text-2xl font-bold -mt-6 mb-4'>Contact</h1>
              <form className='flex flex-col'>
              <input type='text' placeholder='FullName' required className='m-1 w-100'/>
              <input type='text' placeholder='Email' required className='m-1 w-100'/>
              <input type='text' placeholder='Message' required className='m-1 w-100'/>
            </form> */}
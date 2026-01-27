import React from "react";
import { NavLink,useLocation } from "react-router-dom";
import { GiPirateFlag } from "react-icons/gi";

const Header = () => {
  const location = useLocation();
  const isContactPage= location.pathname === '/contact';
  return (
    <>
 <div
        className={`top-0 left-0 w-full z-50 py-3 ${isContactPage ? "fixed bg-transparent" : "sticky bg-white shadow-2xl" }`}> 
               <ul className="flex items-center justify-between w-auto ">
          <NavLink to="/" className="hover:opacity-40 mr-40 pl-3 text-6xl cursor-pointer items-center">
            <GiPirateFlag />
          </NavLink>
         <li className={`rounded-full p-4 ${isContactPage? "bg-transparent": "bg-white shadow-2xl"}`}> 
            <ul className="flex ">
              <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-500" : "text-black"} hover:opacity-40 mx-5 text-lg`}>Home</NavLink>
              <NavLink to="/about" className={({isActive})=>`${isActive?"text-red-500":"text-black"} hover:opacity-40 mx-5 text-lg cursor-pointer`}>About</NavLink>
              <NavLink to="/quotes" className={({isActive})=>`${isActive?"text-red-500":"text-black"} hover:opacity-40 mx-5 text-lg cursor-pointer`}>Quotes</NavLink>
              <NavLink to="/contact" className={({isActive})=>`${isActive?"text-red-500":"text-black"} hover:opacity-40 mx-5 text-lg cursor-pointer`}>Contact</NavLink>
            </ul>
          </li>
          <li>
            <ul className="flex pr-3 items-center">
              <NavLink to="/about" className={({isActive})=>`${isActive?"text-red-500":"text-black"} hover:bg-red-400  mx-3 text-lg cursor-pointer bg-red-500 text-white shadow-2xl p-2 px-3 rounded-xl`}>
                Get Started
              </NavLink>
            </ul>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Header;

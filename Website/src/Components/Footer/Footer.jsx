import React from "react";
import { GiPirateFlag } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="max-w-3xl mx-auto">
      <div className="text-center justify-evenly">
        <div className="flex justify-center">
          <NavLink to="/" className="flex text-9xl items-center mr-15">
            <GiPirateFlag />
          </NavLink>
          <div className="flex ">
            <div className="m-10 text-start space-y-3">
              <div className="font-bold hover:cursor-default">Resources</div>
              <div className="hover:underline">
                <NavLink to="/" className={({isActive})=>`${isActive?"text-red-500":"text-black"}`}>Home</NavLink>
              </div>
              <div className="hover:underline">
                <NavLink to="/about" className={({isActive})=>`${isActive?"text-red-500":"text-black"}`}>About</NavLink>
              </div>
            </div>
            <div className="m-10 text-start space-y-3">
              <div className="font-bold hover:cursor-default">Follow Us</div>
              <div className="hover:underline">
                <a href="https://www.instagram.com/onepieceanimeofficial/?hl=en" target="_blank">Instagram</a>
              </div>
              <div className="hover:underline">
                <a href="https://www.facebook.com/onepieceofficial/" target="_blank">Facebook</a>
              </div>
            </div>

            <div className="m-10 text-start space-y-3">
              <div className="font-bold hover:cursor-default">Legal</div>
              <div className="hover:underline">
                <NavLink to="/footer" className={({isActive})=>`${isActive?"text-red-500":"text-black"}`}>Privacy Policy</NavLink>
              </div>
              <div className="hover:underline">
                <NavLink to="/footer">Terms & Condition</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center w-auto hover:cursor-default">
          <hr  className="my-4"/>
          <span className="pb-5">© 2026 KirtanVaghela. All rights reserved.</span>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
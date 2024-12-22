
import React, { useState } from 'react';
import fidarlogo from '../../images/fidarlogo.svg';
import { Link } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center px-4 py-4 md:px-8">
        {/* Logo */}
        <img
          className="w-[54px] h-[47.49px]"
          src={fidarlogo}
          alt="Logo"
        />

        {/* Menu Button for Mobile */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menu Links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-[60px] left-0 w-full bg-white md:static md:flex md:flex-row md:gap-10 items-center justify-between md:bg-transparent md:w-auto `}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center p-4 md:p-0 md:mr-40">
            <Link to="/" className="text-[#000000] hover:text-black text-lg font-normal">Home</Link>
            <Link to="" href="#" className="text-[#a6a6a6] hover:text-black text-lg font-normal">FAQ</Link>
            <Link to="" href="#" className="text-[#a6a6a6] hover:text-black text-lg font-normal">Blog</Link>
            <Link to="" href="#" className="text-[#a6a6a6] hover:text-black text-lg font-normal">About Us</Link>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center p-4 md:p-0">
            <Link
              to="/pages/login"
              className="text-[#a6a6a6] hover:text-black text-lg font-normal"
            >
              Login
            </Link>
            <Link
              to="/pages/signup"
              className="bg-[#35b2f6] text-white px-4 py-2 rounded-lg hover:bg-[#1e90ff] text-lg font-normal"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;

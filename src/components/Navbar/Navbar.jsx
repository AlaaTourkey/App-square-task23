import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`${isOpen ? 'w-72' : 'w-20'} bg-gray-800 h-svh p-5 pt-8 relative duration-300`}>
        <button
          className="absolute top-9 right-3 text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <i className="fas fa-arrow-left"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>

        <div className="flex items-center">
          <div className={`${isOpen ? 'text-xl font-bold' : 'text-sm'} text-white`}>
            {isOpen ? "My Sidebar" : "MS"}
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="pt-6">
          <NavLink to='/home'>
            <li className={`flex items-center p-2 text-gray-300 text-sm gap-x-4 cursor-pointer hover:bg-gray-700 rounded-md ${!isOpen && 'justify-center'}`}>
              <i className="fas fa-home"></i>
              {isOpen && <span>Home</span>}
            </li>
          </NavLink>
          <NavLink to={'/about'}>
            <li className={`flex items-center p-2 text-gray-300 text-sm gap-x-4 cursor-pointer hover:bg-gray-700 rounded-md ${!isOpen && 'justify-center'}`}>
              <i className="fas fa-user"></i>
              {isOpen && <span>Profile</span>}
            </li>
          </NavLink>

        </ul>
      </div>


    </div>
  );
}

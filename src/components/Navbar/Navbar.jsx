import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from "../redux/actions";

function Navbar(props) {
  console.log(props);

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`${isOpen ? 'w-full' : 'w-20'} bg-gray-800 h-svh p-5 pt-8 relative duration-300`}>
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
          {props.isAuthenticated ? (
            <>
              <NavLink to='/home'>
                <li className={`flex items-center p-2 text-gray-300 text-sm gap-x-4 cursor-pointer hover:bg-gray-700 rounded-md ${!isOpen && 'justify-center'}`}>
                  <i className="fas fa-home"></i>
                  {isOpen && <span>Home</span>}
                </li>
              </NavLink>
              <NavLink to='/about'>
                <li className={`flex items-center p-2 text-gray-300 text-sm gap-x-4 cursor-pointer hover:bg-gray-700 rounded-md ${!isOpen && 'justify-center'}`}>
                  <i className="fas fa-user"></i>
                  {isOpen && <span>About</span>}
                </li>
              </NavLink>
              <NavLink to='/DashboardLayout/dashboard'>
                <li className={`flex items-center p-2 text-gray-300 text-sm gap-x-4 cursor-pointer hover:bg-gray-700 rounded-md ${!isOpen && 'justify-center'}`}>
                  <i className="fas fa-user"></i>
                  {isOpen && <span>Dashboard</span>}
                </li>
              </NavLink>
              <div onClick={props.logout}>
                <li className={`flex items-center p-2 text-gray-300 text-sm gap-x-4 cursor-pointer hover:bg-gray-700 rounded-md ${!isOpen && 'justify-center'}`}>
                  <i className="fas fa-user"></i>
                  {isOpen && <span>Logout</span>}
                </li>
              </div>
            </>
          ) : (
            <>
              <NavLink to='/home'>
                <li className={`flex items-center p-2 text-gray-300 text-sm gap-x-4 cursor-pointer hover:bg-gray-700 rounded-md ${!isOpen && 'justify-center'}`}>
                  <i className="fas fa-home"></i>
                  {isOpen && <span>Home</span>}
                </li>
              </NavLink>
              <NavLink to='/login'>
                <li className={`flex items-center p-2 text-gray-300 text-sm gap-x-4 cursor-pointer hover:bg-gray-700 rounded-md ${!isOpen && 'justify-center'}`}>
                  <i className="fas fa-user"></i>
                  {isOpen && <span>Login</span>}
                </li>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { isAuthenticated: state.isAuthenticated }; // Assuming you have isAuthenticated in your state
}

export default connect(mapStateToProps, { logout })(Navbar);
import React, { useState, useEffect } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

function handleReload() {
  window.location.reload(true)
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showProfileOptions, setShowProfileOptions] = useState(false)

  const onlinestatus = useOnlineStatus()

  useEffect(() => {}, [isLoggedIn])

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setShowProfileOptions(false)
  }

  const handleProfileClick = () => {
    setShowProfileOptions(!showProfileOptions)
  }

  return (
    <div className="flex justify-between shadow-xl bg-[#d6ccc2] h-20 items-center">
      <div className="logo-container">
        <a href="/" onClick={handleReload}>
          <img
            className="w-28 mx-4 cursor-pointer transition ease-in-out delay-50 hover:scale-110 "
            alt="logo"
            src={LOGO_URL}
          />
        </a>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 mx-4 font-medium text-base	 cursor-pointer ">
          <li className="p-4  hover:text-orange-500">
            {' '}
            <i className="far fa-question-circle mx-1 "></i>
            <Link to="/contact"> Help</Link>
          </li>
          <li className="p-4 hover:text-orange-500">
            {' '}
            <i className="fas fa-shopping-cart mx-1"></i> Cart
          </li>
          <li className="p-4 hover:text-orange-500">
            {' '}
            <i className="fas fa-shopping-bag mx-1"></i>{' '}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 hover:text-orange-500">
            {' '}
            <i className="fas fa-info-circle mx-1"></i>{' '}
            <Link to="/about">About Us</Link>
          </li>
          {isLoggedIn ? (
            <>
              {showProfileOptions && (
                <>
                  <li
                    className="p-4 hover:text-orange-500"
                    onClick={handleProfileClick}
                  >
                    {' '}
                    <i className="far fa-user mx-1"></i> Profile
                  </li>
                  <div className="  w-44  rounded-lg  bg-[#d6ccc2] shadow-xl border-[0.1px]  border-[#d5bdaf] absolute top-[4.5rem] right-[1.5rem]">
                    <ul className="p-2 m-2 ">
                      <li className="p-2 hover:text-orange-500 hover:bg-[#e3d5ca] rounded-lg">
                        Orders
                      </li>
                      <li
                        className="p-2 hover:text-orange-500 hover:bg-[#e3d5ca] rounded-lg"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                </>
              )}

              {!showProfileOptions && (
                <>
                  <li
                    className="p-4  hover:text-orange-500  "
                    onClick={handleProfileClick}
                  >
                    {' '}
                    <i className="far fa-user mx-1"></i> Profile
                  </li>
                </>
              )}
            </>
          ) : (
            <>
              <li className="p-4 hover:text-orange-500" onClick={handleLogin}>
                <i className="far fa-user 1 animate-spin"></i> Sign in
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header

import React, { useState, useEffect, useContext } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import userContext from '../utils/userContext'
import { useSelector } from 'react-redux'

function handleReload() {
  window.location.reload(true)
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showProfileOptions, setShowProfileOptions] = useState(false)
  const [showElements, setshowElements] = useState(false)
  const [onhover, setonhover] = useState(false)

  const onlinestatus = useOnlineStatus()

  const { loggedInUser } = useContext(userContext)

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

  const handleElementsToogle = () => {
    setshowElements(!showElements)
  }

  const handleHover = () => {
    setonhover(true)
  }
  const handleHoverleave = () => {
    setonhover(false)
  }

  //subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items)
  // console.log(cartItems)

  return (
    <div className="header relative  flex justify-between shadow-xl bg-[#d6ccc2] h-20 items-center">
      <div className="logo-container">
        <a href="/" onClick={handleReload}>
          <img
            className="w-28 mx-4 cursor-pointer transition ease-in-out delay-50 hover:scale-110 "
            alt="logo"
            src={LOGO_URL}
          />
        </a>
      </div>
      <div
        className={`elements absolute top-[4.5rem] right-[0.5rem] md:flex md:top-[0rem] md:right-[0rem] md:justify-center items-center ${
          showElements || onhover ? 'visible' : 'hidden'
        }`}
      >
        <ul className="bg-[#d6ccc2] shadow-xl rounded-lg border-[0.1px]  border-[#d5bdaf]  md:flex  md:shadow-none md:border-0 md:px-4 md:pt-4 md:mx-4 font-medium text-base  cursor-pointer">
          <li className="p-4  hover:text-orange-500">
            {' '}
            <i className="far fa-question-circle mx-1 "></i>
            <Link to="/contact"> Help</Link>
          </li>
          <li className="p-4 hover:text-orange-500">
            {' '}
            <span className="relative -top-[0.9rem] left-[1.2rem] text-orange-500 font-bold">
              {cartItems.length}
            </span>
            <i className="fas fa-shopping-cart mx-1"></i>
            <Link to="/cart">Cart</Link>
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
                    <i className="far fa-user mx-1"></i> {loggedInUser}
                  </li>
                  <div className="  w-44  rounded-lg  bg-[#d6ccc2] shadow-xl border-[0.1px]  border-[#d5bdaf] absolute top-[10.5rem] right-[7.9rem] md:top-[4.5rem] md:right-[1.5rem]">
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
                    <i className="far fa-user mx-1"></i> {loggedInUser}
                  </li>
                </>
              )}
            </>
          ) : (
            <>
              <li className="p-4 hover:text-orange-500" onClick={handleLogin}>
                <i className="far fa-user 1 "></i> Sign in
              </li>
            </>
          )}
        </ul>
      </div>
      <div
        className="hamburger mx-6 px-4 sm:bg-white md:hidden cursor-pointer"
        onClick={handleElementsToogle}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverleave}
      >
        <div className="line h-0.5 w-6 my-1 bg-black"></div>
        <div className="line h-0.5 w-6 my-1 bg-black"></div>
        <div className="line h-0.5 w-6 my-1 bg-black"></div>
      </div>
    </div>
  )
}

export default Header

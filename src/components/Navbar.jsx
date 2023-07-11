import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import menu from "../assets/images/icon-menu.svg"
import menuClose from "../assets/images/icon-menu-close.svg"

const Navbar = () => {
  const [toggleHam, setToggleHam] = useState(false)
  const handleHam = () => {
    setToggleHam(!toggleHam)
  }
  return (
    <div className="sticky w-full h-[80px] flex justify-between items-center px-4 bg-inherit text-hsl(233, 8%, 79%)">
      <div>
        <img src={logo} />
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Category</li>
      </ul>
      {/* Hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleHam}>
        {toggleHam ? <img src={menuClose} /> : <img src={menu} />}
      </div>

      <ul
        className={
          toggleHam
            ? " absolute  top-0 right-0 w-2/3  h-screen bg-white flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">New</li>
        <li className="py-6 text-4xl">Popular</li>
        <li className="py-6 text-4xl">Trending</li>
        <li className="py-6 text-4xl">Category</li>
      </ul>
    </div>
  )
}

export default Navbar

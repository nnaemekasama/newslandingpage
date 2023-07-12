import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import menu from "../assets/images/icon-menu.svg"
import menuClose from "../assets/images/icon-menu-close.svg"

const Navbar = () => {
  const links = ["Home", "New", "Popular", "Trending", "Category"]
  const [toggleHam, setToggleHam] = useState(false)
  const handleHam = () => {
    setToggleHam(!toggleHam)
  }
  return (
    <div className="sticky w-full h-[80px] flex justify-between items-center px-4 bg-inherit ">
      <div>
        <img src={logo} />
      </div>
      <ul className="hidden md:flex" style={{ color: "hsl(236, 13%, 42%)" }}>
        {links.map((link, index) => (
          <li key={index}>
            <a
              className=""
              href={`#${index}`}
              onMouseEnter={(e) => (e.target.style.color = "hsl(35, 77%, 62%)")}
              onMouseLeave={(e) =>
                (e.target.style.color = "hsl(236, 13%, 42%)")
              }
              onMouseDown={(e) => (e.target.style.color = "hsl(233, 8%, 79%)")}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      {/* Hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleHam}>
        {toggleHam ? <img src={menuClose} /> : <img src={menu} />}
      </div>

      <ul
        className={
          toggleHam
            ? " absolute  top-0 right-0 w-2/3  h-screen bg-white flex flex-col mt-20 text-left"
            : "hidden"
        }
      >
        {links.map((link, index) => (
          <li key={index} className="py-6 text-xl">
            <a
              className=""
              href={`#${index}`}
              onMouseEnter={(e) => (e.target.style.color = "hsl(35, 77%, 62%)")}
              onMouseLeave={(e) =>
                (e.target.style.color = "hsl(236, 13%, 42%)")
              }
              onMouseDown={(e) => (e.target.style.color = "hsl(233, 8%, 79%)")}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar

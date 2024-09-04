import React, { useState } from "react"
import { Link } from "react-scroll"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="navbar container">
      <Link
        href="/"
        className="logo"
        smooth={true}
        to="Hero"
        onClick={() => setOpenMenu(false)}
      >
        <img src="/logo-w.webp" alt="" width={100} height={60}></img>
      </Link>
      <div
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
        className={
          openMenu ? "navMenuWrapper" + " " + "open" : "navMenuWrapper"
        }
      >
        <ul className="navMenu">
          <li>
            <Link
              smooth={true}
              to="Services"
              offset={-120}
              onClick={() => setOpenMenu(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              to="Locations"
              offset={-120}
              onClick={() => setOpenMenu(false)}
            >
              Locations
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              to="About"
              offset={-120}
              onClick={() => setOpenMenu(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              to="Contact"
              offset={-120}
              onClick={() => setOpenMenu(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={openMenu ? "hamburgerBtn" + " " + "open" : "hamburgerBtn"}
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
      >
        <div className="hamburger"></div>
      </div>
    </header>
  )
}

export default Header

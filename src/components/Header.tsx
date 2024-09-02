import React, { useState } from "react"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <header className="navbar container">
      <a href="/" className="logo">
        <img src="/logo-w.webp" alt="" width={100} height={60}></img>
      </a>
      <div
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
        className={
          openMenu ? "navMenuWrapper" + " " + "open" : "navMenuWrapper"
        }
      >
        <ul className="navMenu">
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
          <li>link4</li>
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

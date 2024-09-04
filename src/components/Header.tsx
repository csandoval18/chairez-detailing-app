import React, { useEffect, useState } from "react"
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import { Link } from "react-scroll"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [theme, setTheme] = useState("light")
  const [openMenu, setOpenMenu] = useState(false)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize) // Cleanup the event listener on component unmount
    }
  }, [])

  return (
    <header className="navbar container">
      <Link
        href="/"
        className={openMenu ? "logo open" : "logo"}
        smooth={true}
        to="Hero"
        onClick={() => setOpenMenu(false)}
      >
        <img src="/logo-w.webp" alt="header-logo" width={100} height={60} />
      </Link>

      <div
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
        className={openMenu ? "navMenuWrapper open" : "navMenuWrapper"}
      >
        <div className="menu">
          <div className="btn-wrapper">
            <button
              className="btn btn-theme-toggle"
              onClick={(e) => {
                e.stopPropagation()
                toggleTheme()
              }}
            >
              {theme === "light" ? <MdOutlineDarkMode /> : <MdDarkMode />}
            </button>
          </div>
          <ul className={openMenu ? "navMenu open" : "navMenu"}>
            <div
              className={
                openMenu
                  ? "mobile-drawer-settings open"
                  : "mobile-drawer-settings"
              }
            >
              <button
                className="btn btn-theme-toggle"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleTheme()
                }}
              >
                {theme === "light" ? <MdOutlineDarkMode /> : <MdDarkMode />}
              </button>
            </div>
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
      </div>

      <div
        className={openMenu ? "hamburgerBtn open" : "hamburgerBtn"}
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

import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { LuSunMoon } from "react-icons/lu";
import { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(
    window.innerwidth < 600 ? false : true
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("voting-app-theme") || ""
  );

  const closeNavMenu = () => {
    if (window.innerWidth < 600) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  // Toggle dark mode
  const toggleTheme = () => {
    if (localStorage.getItem("voting-app-theme") == "dark") {
      localStorage.setItem("voting-app-theme", "");
    } else {
      localStorage.setItem("voting-app-theme", "dark");
    }
    setDarkMode(localStorage.getItem("voting-app-theme"));
  };

  useEffect(() => {
    document.body.className = localStorage.getItem("voting-app-theme");
  }, [darkMode]);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          ElectroVote
        </Link>
        <div>
          {showMenu && (
            <menu>
              <NavLink
                to="/elections"
                onClick={closeNavMenu}
                className="nav__link"
              >
                Elections
              </NavLink>
              <NavLink
                to="/results"
                onClick={closeNavMenu}
                className="nav__link"
              >
                Results
              </NavLink>
              <NavLink
                to="/logout"
                onClick={closeNavMenu}
                className="nav__link"
              >
                Logout
              </NavLink>
            </menu>
          )}
          <button className="toggle__theme-btn" onClick={toggleTheme}>
            {darkMode === "dark" ? (
              <LuSun size={26} />
            ) : (
              <LuSunMoon size={26} />
            )}
          </button>
          {/* <button className="toggle__theme-btn">
            <LuSun size={26} />
          </button> */}

          <button
            className="nav__toggle-btn"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <IoMdClose size={26} /> : <RiMenu3Fill size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = ({ toggleTheme }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  const navElements = [
    { to: "heroSection", label: "Home" },
    { to: "MyPortfolio", label: "Portfolio" },
    { to: "mySkills", label: "Skills" },
  ];

  return (
    <nav className={`navbar ${isNavOpen ? "active" : ""}`}>
      <div className="nav-hamburger">
        <h1 className="nav-text">PORTFOLIO</h1>

        {/* Hamburger Menu Toggle */}
        <button
          className={`nav__hamburger ${isNavOpen ? "active" : ""}`}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`navbar--items ${isNavOpen ? "active" : ""}`}>
        <ul>
          {navElements.map((item) => (
            <li
              key={item.to}
              className={` navbar--content ${isNavOpen ? "active" : ""}`}
            >
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={item.to}
                className="navbar--content"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li
            className={`navbar--content ${isNavOpen ? "active" : ""}`}
            onClick={(setIsNavOpen) => {
              closeMenu();
              toggleTheme();
            }}
          >
            {document.body.classList.contains("dark")
              ? "Dark Mode"
              : "Light Mode"}
          </li>
        </ul>
      </div>

      {/* Contact Me Button */}
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;

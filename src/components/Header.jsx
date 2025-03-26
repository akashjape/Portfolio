const Header = () => {
  return (
    <div>
      <nav className="navbar ">
        <div>
          <img src="./img/logo.svg" alt="Logoipsum" />
        </div>
        <a className="nav__hamburger ">
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>
        <div className="navbar--items ">
          <ul>
            <li>
              <a className="navbar--content navbar--active-content">Home</a>
            </li>
            <li>
              <a className="navbar--content">Portfolio</a>
            </li>
            <li>
              <a className="navbar--content">About Me</a>
            </li>
            <li>
              <a className="navbar--content">Testimonials</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-outline-primary">Contact Me</a>
      </nav>
    </div>
  );
};

export default Header;

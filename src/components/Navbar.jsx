import { useState, useEffect } from "react";
import logo1 from "../../assets/logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);


  useEffect(() => {

    const innernav = document.querySelector(".inner-nav");
    if (showNav === true) {
      innernav.style.left = "0px";
    } else {
      innernav.style.left = "-1000px";
    }
  }, [showNav]);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  document.addEventListener('mousedown', () => {
    setShowNav(!showNav);
  });

  return (
    <div className="navbar rounded-3xl">
      <div onClick={handleClick} className={`${showNav ? "hamburger1" : "hamburger"}`}></div>
      <div className="logo">
        <Link to="/">
          <img src={logo1} alt="Logo" />
        </Link>
        <nav className="menu">
          <ul className="inner-nav list-none">
            <li>
              <Link to="/" className="text-2xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/mint" className="text-2xl">
                Mint
              </Link>
            </li>
            <li>
              <Link to="/waitlist" className="text-2xl">
                Waitlist
              </Link>
            </li>
            <li>
              <Link to="/doc" className="text-2xl">
                Doc
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="button">
        <Link to="/contact" className="text-lg">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

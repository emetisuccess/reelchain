import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const innernav = document.querySelector(".inner-nav");
    if (showNav === true) {
      innernav.style.left = "0px";
    } else {
      innernav.style.left = "-300px";
    }
  }, [showNav]);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="navbar rounded-3xl">
      <div onClick={handleClick} className={`${showNav ? "hamburger1" : "hamburger"}`}></div>
      <div className="logo">
        <a href="/">
          <img src="logo1.png" alt="Logo" />
        </a>
        <nav className="menu">
          <ul className="inner-nav list-none">
            <li>
              <a href="/" className="text-2xl">
                Home
              </a>
            </li>
            <li>
              <a href="/mint" className="text-2xl">
                Mint
              </a>
            </li>
            <li>
              <a href="/waitlist" className="text-2xl">
                Waitlist
              </a>
            </li>
            <li>
              <a href="/doc" className="text-2xl">
                Doc
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="button">
        <a href="/contact" className="text-lg">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;

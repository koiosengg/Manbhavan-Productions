import React, { useEffect, useState } from "react";
import Logo from "/Navbar Logo.png";

function Navbar() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={showHeader ? "header show" : "header hide"}>
      <img src={Logo} alt="Manbhavan Productions Logo" />
      <nav>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Work</a>
        <a href="#">Service</a>
      </nav>
      <a href="#" className="navbar-button">
        <p>Let’s Talk</p>
      </a>
    </header>
  );
}

export default Navbar;

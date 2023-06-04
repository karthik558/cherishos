import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const NavBar = ({ lr, nr, theme }) => {
  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    if (targetId === "#") {
      window.location.href = "/";
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
    handleMobileDropdown();
  };

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          onClick={handleMobileDropdown}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleNavLinkClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={handleNavLinkClick}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={handleNavLinkClick}
              >
                Screenshots
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={handleNavLinkClick}
              >
                Team
              </a>
            </li>   
            <div className="butons mt-10">
                <a href="mailto:support@cherishos.com" className="butn-gr rounded buton">
                  <span>Contact</span>
                </a>
              </div>        
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

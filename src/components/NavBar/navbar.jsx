import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const NavBar = ({ lr, nr, theme }) => {
  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
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
              <a className="nav-link" href="#home" onClick={handleNavLinkClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#features"
                onClick={handleNavLinkClick}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#screenshots"
                onClick={handleNavLinkClick}
              >
                Screenshots
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#team"
                onClick={handleNavLinkClick}
              >
                Team
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#join-us"
                onClick={handleNavLinkClick}
              >
                Join Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq" onClick={handleNavLinkClick}>
                Faqs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

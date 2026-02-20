import React, { useState } from "react";
import "../CSS/Navbar.css";
import headerlogo from "../assets/headerlogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  /* DESKTOP LINKS (NO HOME) */
  const desktopLinks = [
    { name: "Company", path: "/company" },
    { name: "Services", path: "/services" },
    { name: "Diversity & Inclusion", path: "/diversity-inclusion" },
    { name: "Domain Specialities", path: "/domains" },
    { name: "Contact", path: "/contact" },
  ];


  const mobileLinks = [
    { name: "Home", path: "/" },
    ...desktopLinks
  ];

  return (
    <header className="navbar">

      <div className="navbar-container">

        <div className="navbar-left">
          <Link to="/">
            <img
              src={headerlogo}
              alt="Live Connections"
              className="header-logo"
            />
          </Link>
        </div>

        
        <nav className="navbar-center">
          {desktopLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.name}
            </Link>
          ))}
        </nav>

        
        <div className="navbar-right">

          <button
            className="btn-outline desktop-only"
            onClick={() => navigate("/contact")}
          >
            Talk to Us
          </button>

          <button
            className="job-btn desktop-only"
            onClick={() => navigate("/findjobs")}
          >
            Find a Job
          </button>

          
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdClose /> : <FaBars />}
          </button>

        </div>
      </div>

     
      <div
        className={`sidebar-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

     
      <aside className={`responsive-panel ${open ? "open" : ""}`}>

        <button
          className="panel-close"
          onClick={() => setOpen(false)}
        >
          <MdClose />
        </button>

        <nav className="panel-nav">
          {mobileLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="panel-actions">
          <button
            className="btn-outline"
            onClick={() => navigate("/findjobs")}
          >
            Find a Job
          </button>
        </div>

      </aside>

    </header>
  );
}

export default Navbar;

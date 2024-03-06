import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";
import tes from "../images/tes.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbarcomp = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <header
      id="header"
      className="fixed-top header-transparent header-scrolled"
    >
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="/">
            <img src={tes} alt="" />
          </a>
        </h1>

        <Navbar id="navbar" className="navbar" variant="dark" expand="lg">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleBurgerClick}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <li>
                <Nav.Link className="nav-link scrollto active" href="/">
                  Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link className="nav-link scrollto" href="/#tentang-sbi">
                  About
                </Nav.Link>
              </li>
              <li>
                <Nav.Link className="nav-link scrollto" href="/#lowongan-kerja">
                  Job Vacancy
                </Nav.Link>
              </li>
              <li>
                <Nav.Link className="nav-link scrollto" href="/#faq-page">
                  FAQ{" "}
                </Nav.Link>
              </li>
              <li>
                <Nav.Link className="getstarted scrollto" href="/sign-in">
                  LOGIN
                </Nav.Link>
              </li>
            </Nav>
          </Navbar.Collapse>
          {isMenuActive && (
            <div className="mobile-menu">
              <ul>
                <li>
                  <Nav.Link href="/">Home</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/#tentang-sbi">About</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/#lowongan-kerja">Job Vacancy</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/#faq-page">FAQ</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/sign-in">LOGIN</Nav.Link>
                </li>
              </ul>
            </div>
          )}
        </Navbar>
      </div>
    </header>
  );
};
export default Navbarcomp;

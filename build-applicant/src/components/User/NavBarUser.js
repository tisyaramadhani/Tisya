import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Icon } from "@iconify/react";
import userAvatarFilled from "@iconify/icons-carbon/user-avatar-filled";
import jwtDecode from "jwt-decode";
import tes from "../../images/tes.png";
import { removeTokens } from "../../api/AuthServices";

const NavBarUser = () => {
  const token = jwtDecode(window.localStorage.getItem("accessToken"));

  let name = token.name;

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
          <a href="/home-user">
            <img src={tes} alt="" />
          </a>{" "}
        </h1>

        <Navbar id="navbar" variant="dark" expand="lg">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleBurgerClick}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <li>
                <Nav.Link
                  className="nav-link scrollto active"
                  href="/home-user"
                >
                  Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  className="nav-link scrollto"
                  href="/home-user#tentang-sbi"
                >
                  About
                </Nav.Link>
              </li>

              <li>
                <Nav.Link
                  className="nav-link scrollto"
                  href="/home-user#lowongan-kerja"
                >
                  Job Vacancy
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  className="nav-link scrollto"
                  href="/home-user#faq-page"
                >
                  FAQ
                </Nav.Link>
              </li>
              <li
                className="dropdown"
                style={{ marginLeft: "30px", position: "relative" }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <Icon
                    icon={userAvatarFilled}
                    width="33"
                    height="33"
                    color="#FFFFFF"
                  />
                  <Nav.Link style={{ marginLeft: "3px" }}>{name}</Nav.Link>
                </span>
                <ul>
                  <li>
                    <a href="/info-pelamar">Application</a>
                  </li>
                  <li>
                    <a href="/cvonline-user">CV Online</a>
                  </li>
                  <li>
                    <a href="/passloginbaru">Change Password</a>
                  </li>
                </ul>
              </li>
              <li>
                <Nav.Link
                  className="getstarted scrollto"
                  href="/"
                  onClick={(e) => {
                    removeTokens();
                  }}
                >
                  LOGOUT
                </Nav.Link>
              </li>
            </Nav>
          </Navbar.Collapse>
          {isMenuActive && (
            <div className="mobile-menu">
              <ul>
                <li>
                  <Nav.Link
                    className="nav-link scrollto active"
                    href="/home-user"
                  >
                    Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="nav-link scrollto" href="#tentang-sbi">
                    About
                  </Nav.Link>
                </li>

                <li>
                  <Nav.Link className="nav-link scrollto" href="#lowongan-user">
                    Job Vacancy
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="nav-link scrollto" href="#faq-user">
                    FAQ
                  </Nav.Link>
                </li>
                <li className="dropdown" style={{ marginLeft: "30px" }}>
                  <span href="#">
                    <Icon
                      icon={userAvatarFilled}
                      width="33"
                      height="33"
                      color="#FFFFFF"
                    />
                  </span>
                  <ul>
                    <li>
                      <a href="/pengumuman">Announcement</a>
                    </li>
                    <li>
                      <a href="/info-pelamar">Application</a>
                    </li>
                    <li>
                      <a href="/cvonline-user">CV Online</a>
                    </li>
                    <li>
                      <a href="/passloginbaru">Change Password</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Nav.Link>{name}</Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    className="getstarted scrollto"
                    href="/"
                    onClick={(e) => {
                      removeTokens();
                    }}
                  >
                    LOGOUT
                  </Nav.Link>
                </li>
              </ul>
            </div>
          )}
        </Navbar>
      </div>
    </header>
  );
};

export default NavBarUser;

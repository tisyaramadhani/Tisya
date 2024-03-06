import React, { useEffect } from "react";
import NavBar from "../Navbarcomp";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";
import TentangSBI from "./TentangSBI";
import Faq from "./FaqPage";
import { removeTokens } from "../../api/AuthServices";
import LowonganKerja from "./LowonganKerja";

const Home = () => {
  removeTokens();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container position-relative">
          <h1> PT Sumitomo Wiring Systems Batam Indonesia</h1>
          <a href="#tentang-sbi" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>

      <section id="clients" className="clients section-bg">
        <div className="container">
          <div className="row" data-aos="zoom-in"></div>
        </div>
      </section>

      <TentangSBI/>
      <LowonganKerja/>
      <Faq></Faq>
      <Footer isLoggedIn={false}></Footer>
    </>
  );
};

export default Home;

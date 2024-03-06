import React, { useEffect, useState } from "react";
import NavBarUser from "./NavBarUser";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer";
import LowonganKerja from "../pages/LowonganKerja";
import TentangSBI from "../pages/TentangSBI";
import Faq from "../pages/FaqPage";
import { useQuery } from "react-query";
import { getRunningText } from "../../api/RunningTextApi";
import { Icon } from "@iconify/react";

const HomeUser = () => {
  const [runningText, setRunningText] = useState([]);

  useQuery("runningText", async () => {
    const data = await getRunningText();
    setRunningText(data);
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <NavBarUser></NavBarUser>
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
        <div className="marquee-container">
          {runningText.map((text, i) => (
            <div key={i} className="marquee">
              <Icon icon="fxemoji:megaphone" width="30" />
              {text.text}
            </div>
          ))}
        </div>
      </section>

      <TentangSBI></TentangSBI>
      <LowonganKerja></LowonganKerja>
      <Faq></Faq>
      <Footer isLoggedIn={true}></Footer>
    </>
  );
};

export default HomeUser;

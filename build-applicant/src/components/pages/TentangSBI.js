import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getPresidentText, getProfileCompany } from "../../api/TentangSbiApi";
import { useQuery } from "react-query";
import { Col, Row } from "react-bootstrap";
import HTMLReactParser from "html-react-parser";

const TentangSBI = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [profileCompany, setProfileCompany] = useState([]);
  const [presidentText, setPresidentText] = useState([]);

  // get profile company
  useQuery("profile-company", async () => {
    const data = await getProfileCompany();
    setProfileCompany(data);
  });

  // get preseident Text
  useQuery("president-text", async () => {
    const data = await getPresidentText();
    setPresidentText(data);
  });

  return (
    <div>
      {/* about */}
      <section
        id="tentang-sbi"
        className="about"
        style={{ textAlign: "justify" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="about-title">
            <h2>ABOUT US</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6 pt-4 pt-lg-0">
              {profileCompany.map((data, i) => (
                <Row className="pt-5" key={data.id}>
                  <Col
                    sm
                    className="pb-5  mb-5 fs-12 justify"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {HTMLReactParser(data.text)}
                  </Col>
                </Row>
              ))}
            </div>
            <div className="col-lg-6">
              {profileCompany.map((data, i) => (
                <Row className="pt-5" key={data.id}>
                  <Col sm>
                    <img
                      data-aos="zoom-in"
                      data-aos-delay="400"
                      style={{ height: "60%", width: "60%" }}
                      className=" w-100 img-fluid"
                      src={`http://localhost:5000/public/${data.photo}`}
                      alt=""
                    ></img>
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 
      president direktur */}
      <section
        id="tentang-sbi"
        className="about"
        style={{ textAlign: "justify", marginTop: "50px" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="about-title">
            <h2>PRESIDENT DIRECTOR</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6 pt-4 pt-lg-0">
              {presidentText.map((data, i) => (
                <Row className="pt-5" key={data.id}>
                  <Col sm>
                    <img
                      data-aos="zoom-in"
                      data-aos-delay="400"
                      className=" w-100 img-fluid"
                      src={`http://localhost:5000/public/${data.photo}`}
                      alt=""
                    ></img>
                  </Col>
                </Row>
              ))}
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  {presidentText.map((data, i) => (
                    <Row className="pt-5" key={data.id}>
                      <Col
                        sm
                        className="pb-5  mb-5 fs-12 justify"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        {HTMLReactParser(data.text)}
                      </Col>
                    </Row>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tentang-sbi"
        className="services section-bg"
        style={{
          justifyContent: "center",
          background: "#f3f5fa",
          marginTop: "50px",
        }}
      >
        <div className="container" data-aos="fade-up">
          <div className="services-title">
            <h2>SWS WAY</h2>
            <p>
              Action principles for all of us in the Sumitomo harness business
            </p>
          </div>
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="service-item  position-relative">
                <h3>Professionalism</h3>
                <p>Costumer Satisfaction</p>
                <p>Honesty and Integrity</p>
                <p>Pride in what we do</p>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="service-item position-relative">
                <h3>Team Work</h3>
                <p>Mutual communication</p>
                <p>Accountability & Cooperation</p>
                <p>Diversity & Inclusion</p>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service-item position-relative">
                <h3>Challenge</h3>
                <p>Forward Thinking</p>
                <p>Learning from experience</p>
                <p>Ambition & Perseverance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangSBI;

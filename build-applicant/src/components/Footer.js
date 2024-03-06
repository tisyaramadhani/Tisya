import React from "react";
import { Icon } from "@iconify/react";
import "typeface-roboto";

const Footer = ({ isLoggedIn }) => {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-3 footer-contact">
                <h3>PT.Sumitomo Wiring System Batam</h3>
                <p>
                  Kawasan Industri Batamindo <br />
                  Kav.8 Muka Kuning Batam
                  <br />
                  29433 Indonesia <br />
                  <br />
                  <strong> </strong>
                  <strong> </strong>
                  <br />
                </p>
              </div>
              <div className="col-lg-3 col-md-4 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  {isLoggedIn ? (
                    // Tampilkan ini jika pengguna sudah login
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="/home-user">Home</a>
                    </li>
                  ) : (
                    // Tampilkan ini jika pengguna belum login
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="/">Home</a>
                    </li>
                  )}
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#tentang-sbi">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#lowongan-kerja">Job Vacancy</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#faq-page">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 footer-links">
                <h4>Contact</h4>
                <ul>
                  <p>
                    <Icon
                      icon="line-md:email"
                      color="#5fa8d0"
                      width="26"
                      height="26"
                      className="me-2"
                    />
                    Email: hrd@sbi.co.id
                  </p>
                  <p>
                    <Icon
                      icon="emojione-monotone:telephone"
                      color="#5fa8d0"
                      width="26"
                      height="26"
                      className="me-2"
                    />
                    Telepon: (0770) 611553.
                  </p>
                  <p>
                    <Icon
                      icon="fluent:fax-16-filled"
                      color="#5fa8d0"
                      width="26"
                      height="26"
                      className="me-2"
                    />
                    Fax: (0770) 611803.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>IS Development</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <span>IS Development</span>
          </div>
        </div>
      </footer>
      <p />
    </div>
  );
};

export default Footer;

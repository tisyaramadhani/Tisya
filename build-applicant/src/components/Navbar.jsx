import React from 'react'

const Navbar = () => {
  return (
    <div>
    {/* Navigation*/}
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top"><img src="assets/img/teks.png" alt="..." /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <svg className="svg-inline--fa fa-bars ms-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>
          <i className="fas fa-bars ms-1" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link" href="#company">Company</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Section</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Masthead*/}
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading">
          <div id="typewriter" />
        </div>
        <div className="masthead-heading text-uppercase">Training Centre</div>
        <button id="myButton" onclick="location.href='../../login.php'">    SIPTC User Login     
        </button></div>
    </header>
    <section className="page-section">
      <div className="container">
        <div id="company" className="nprinsley-text-rainbowan">
          <h1><center> Company Profile </center></h1>
        </div>
        <br />
        <p style={{ textAlign: 'justify' }}>
  <img
    src="../../dist/img/sacho.png"
    alt="Company Logo"
    style={{ float: 'left', margin: '15px' }}
    width="300px"
  />
  <strong>PT Sumitomo Wiring System Batam Indonesia (SWSBI)</strong> adalah perusahaan Jepang yang didirikan pada tahun 1990 dan memproduksi kabel harness untuk mobil. Kapasitas produksi kabel harness adalah 260.000 set per tahun. 100 persen dari produksinya dijual ke pasar ekspor, seperti Thailand, Vietnam, dan China. Sampai saat ini, perusahaan ini telah memberikan peluang kerja bagi 1.492 karyawan, terdiri dari 728 pekerja pria dan 764 pekerja wanita.
  <br /><br />
  <strong>Terhubung dengan yang terbaik<br />SWS WAY</strong> <br /> Prinsip Tindakan untuk kita semua di bisnis harness Sumitomo <br />
  * Profesionalisme <br /> * Kerja Tim <br /> * Tantangan
</p>
      </div>
    </section>
    {/* Services*/}
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Section</h2>
          <h3 className="section-subheading text-muted">Assembly, Cutting&amp;Crimping, Quality Control</h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="circle blue">
              <span className="text-white"><br />1</span>
              <span className="text-white"><br />Assembly</span>
            </span>
            <h4 className="my-3">Assembly</h4>
            <p className="text-muted">Assembly is one of the sections at PT.Sumitomo Wiring Systems Batam Indonesia with the training located in the Training Centre section. In Assembly there are several processes including Sub Assy, ACB, Taping, Mounting.</p>
          </div>
          <div className="col-md-4">
            <span className="circle blue">
              <span className="text-white"><br />2</span>
              <span className="text-white"><br />C&amp;C</span>
            </span>
            <h4 className="my-3">Cutting&amp;Crimping</h4>
            <p className="text-muted">C&amp;C is one of the sections in PT.Sumitomo Wiring Systems Batam Indonesia where the training is located in the Training Centre section. In C&amp;C, there are several processes including Auto C&amp;C and PostProcess.</p>
          </div>
          <div className="col-md-4">
            <span className="circle blue">
              <span className="text-white"><br />3</span>
              <span className="text-white"><br />QC</span>
            </span>
            <h4 className="my-3">Quality Control</h4>
            <p className="text-muted">QC is one of the sections at PT.Sumitomo Wiring Systems Batam Indonesia where its training is located at the Training Centre. In the QC, there are several processes including QC Assy and QC C&amp;C</p>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">The Training Centre Employee Information System is an information system used for recording employee data, renewal, skillmap, skillup, licenses, and others.</h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/grup.jpg" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                
                <h4 className="subheading">Member</h4>
              </div>
              <div className="timeline-body"><p className="text-muted">The Employee Information System can record all employee data, including personal information, awards, licenses, renewals, skill maps, and work experience.</p></div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/renew.jpg" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
          
                <h4 className="subheading">Renewal</h4>
              </div>
              <div className="timeline-body"><p className="text-muted">This Employee Information System also records renewal data, where employees can upload renewals and download monthly renewal reports, and there is a reminder system through email notifications to remind both the admin and employees of renewals.</p></div>
            </div>
          </li>
          <li>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                
                <h4 className="subheading">License</h4>
              </div>
              <div className="timeline-body"><p className="text-muted">In addition, the employee information system also records the license data for each employee.</p></div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
               
                <h4 className="subheading">Skill Map</h4>
              </div>
              <div className="timeline-body"><p className="text-muted">The employee information system at the training center also records each employee's skillmap, covering Assembly, C&amp;C and QC. From the Learning Card, Stand Transfer, Skillup, SkillMap, to the graduation summary results of the On-the-Job Training (OJT).</p></div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                SIP
                <br />
                Training
                <br />
                Centre!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
    {/* Team*/}
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Training Centre Member</h3>
        </div>
        <div className="col-lg-12">
          <div className="team-member">
            <img className="mx-auto img-thumbnail" src="assets/img/team/1.jpg" alt="..." />
            <h4>Mr. Purnomo</h4>
            <p className="text-muted">Advisor</p>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fas fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fas fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/3.jpg" alt="..." />
              <h4>Mr. Jenni Tovrin Lubis</h4>
              <p className="text-muted">Senior Supervisor</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/2.jpg" alt="..." />
              <h4>Mr. Riyanto</h4>
              <p className="text-muted">Supervisor</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/5.jpg" alt="..." />
              <h4>Mrs. Timawar</h4>
              <p className="text-muted">Assistant Officer</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/NEW/HEN.jpg" alt="..." />
              <h4>Mr. Hendrik</h4>
              <p className="text-muted">Senior Clerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>  
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/6.jpg" alt="..." />
              <h4>Mrs. Surini</h4>
              <p className="text-muted">Clerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/NEW/INTAN.JPG" alt="..." />
              <h4>Mrs. Intan</h4>
              <p className="text-muted">Clerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>             
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/Kak Yuzra.JPG" alt="..." />
              <h4>Mrs. Yuzra Adriany</h4>
              <p className="text-muted">Clerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/NEW/ACH ZAKARIYA.JPG" alt="..." />
              <h4>Mr. Ach Zakariya</h4>
              <p className="text-muted">Junior Clerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/NEW/NILA SARI.JPG" alt="..." />
              <h4>Ms. Nila Sari</h4>
              <p className="text-muted">Junior CLerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/NEW/FEBI YON G.jpg" alt="..." />
              <h4>Mrs. Febi</h4>
              <p className="text-muted">Junior Clerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/NEW/LILIS LUCIANA.jpg" alt="..." />
              <h4>Ms. Lilis Luciana</h4>
              <p className="text-muted">Junior Clerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/DEPITRA.jpg" alt="..." />
              <h4>Mr. Depitra</h4>
              <p className="text-muted">Junior Clerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/NEW/DINA AZIZAH.JPG" alt="..." />
              <h4>Ms. Dina Azizah</h4>
              <p className="text-muted">Junior Clerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/NEW/ROMO.jpg" alt="..." />
              <h4>Mr. Romokio</h4>
              <p className="text-muted">Junior Clerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/NANIK.jpg" alt="..." />
              <h4>Mrs. Nanik</h4>
              <p className="text-muted">Junior Clerk</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/NEW/SISKA GUSNELI.jpg" alt="..." />
              <h4>Mrs. Siska Gusneli</h4>
              <p className="text-muted">Admin Operator</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/NEW/PARTINI.jpg" alt="..." />
              <h4>Mrs. Partini</h4>
              <p className="text-muted">Admin Operator</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/MARIA ULFA.jpg" alt="..." />
              <h4>Mrs. Maria Ulfa</h4>
              <p className="text-muted">Admin Operator</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/MELATI.jpg" alt="..." />
              <h4>Mrs. Melati Siburian</h4>
              <p className="text-muted">Admin Operator</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/IRWAN.jpg" alt="..." />
              <h4>Mr. Irwansyah Putra</h4>
              <p className="text-muted">Admin Operator</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member">
              <img className="mx-auto img-thumbnail" src="assets/img/team/BENI.jpg" alt="..." />
              <h4>Mr. Beni Saputra</h4>
              <p className="text-muted">Admin Operator</p>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">While sharing in a sense of common purpose and goals, we carry out our roles and responsibilities as a unified team. While we do what is expected in each of our roles, we do not hesitate to pitch in to provide a helping hand for the team in the pursuit of achieving results.</p></div>
        </div>
      </div>
    </section>
    {/* Clients*/}
    <div className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/toyota.jpg" alt="..." aria-label="Toyota Logo" /></a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/mitsubishi.jpg" alt="..." aria-label="Google Logo" /></a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/logo.png" alt="..." aria-label="Facebook Logo" /></a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/tc3.png" alt="..." aria-label="IBM Logo" /></a>
          </div>
        </div>
      </div>
    </div>
    {/* Contact*/}
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted" aria-hidden="true"/>
        </div>
        {/* * * * * * * * * * * * * * * **/}
        {/* * * SB Forms Contact Form * **/}
        {/* * * * * * * * * * * * * * * **/}
        {/* This form is pre-integrated with SB Forms.*/}
        {/* To make this form functional, sign up at*/}
        {/* https://startbootstrap.com/solution/contact-forms*/}
        {/* to get an API token!*/}
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                {/* Name input*/}
                <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
              </div>
              <div className="form-group">
                {/* Email address input*/}
                <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
              </div>
              <div className="form-group mb-md-0">
                {/* Phone number input*/}
                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                {/* Message input*/}
                <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" defaultValue={""} />
                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
              </div>
            </div>
          </div>
          {/* Submit success message*/}
          {/**/}
          {/* This is what your users will see when the form*/}
          {/* has successfully submitted*/}
          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center text-white mb-3">
              <div className="fw-bolder">Form submission successful!</div>
              To activate this form, sign up at
              <br />
              <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
            </div>
          </div>
          {/* Submit error message*/}
          {/**/}
          {/* This is what your users will see when there is*/}
          {/* an error submitting the form*/}
          <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
          {/* Submit Button*/}
          <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
        </form>
      </div>
    </section>
    {/* Footer*/}
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start"><strong /><center><strong>SIP TC is Powered  by <a href="index.php">Training Centre</a></strong>.&nbsp; Developed by <a href="https://adindaselfiani.wordpress.com/">Adselna </a></center></div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
            <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
    {/* Portfolio Modals*/}
    {/* Portfolio item 1 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Threads
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Illustration
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio item 2 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Explore
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Graphic Design
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio item 3 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Finish
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Identity
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio item 4 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Lines
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Branding
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio item 5 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Southwest
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Website Design
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio item 6 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Window
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Photography
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Bootstrap core JS*/}
    {/* Core theme JS*/}
    {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
    {/* * *                               SB Forms JS                               * **/}
    {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
    {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
  </div>
  
  )
}

export default Navbar
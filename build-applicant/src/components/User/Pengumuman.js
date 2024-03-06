import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBarUser from "./NavBarUser";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import jwtDecode from "jwt-decode";
import { useQuery, useMutation } from "react-query";
import {
  getAnnoucement,
  getAnnouncementByAtten,
  postAtten,
} from "../../api/ApplicationApi";
import FooterUser from "./FooterUser";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const Pengumuman = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const token = jwtDecode(localStorage.getItem("accessToken"));
  const [nik] = useState(token.nik);
  const [showSuccessAlert, setshowSuccessAlert] = useState(false);
  const [showDangerAlert, setshowDangerAlert] = useState(false);
  const [showNullAlert, setshowNullAlert] = useState(false);
  const [showInfoAlert, setshowInfoAlert] = useState(false);
  const [next, setNext] = useState();
  const [time, setTime] = useState();
  const [grade, setGrade] = useState();
  const [status, setStatus] = useState();
  const [timetable, setTimetable] = useState();
  const [tahapseleksi, setTahapSeleksi] = useState();
  //atten
  const [gender, setGender] = useState("");
  const [domisili, setDomisili] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [no_test, setNoTest] = useState("");
  const [position, setPosition] = useState("");
  const [next_selection, setNextSelection] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const no = searchParams.get("no_test");

  const getAlert = async (status) => {
    if (status === "Lulus") {
      setshowSuccessAlert(true);
      setshowDangerAlert(false);
      setshowNullAlert(false);
      setshowInfoAlert(false);
    } else if (status === "Tidak Lulus") {
      setshowSuccessAlert(false);
      setshowDangerAlert(true);
      setshowNullAlert(false);
      setshowInfoAlert(false);
    } else {
      setshowSuccessAlert(false);
      setshowDangerAlert(false);
      setshowNullAlert(false);
      setshowInfoAlert(true);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const { refetch: refetchAnnouncement } = useQuery(
    "announcement",
    async () => {
      const data = await getAnnoucement(nik, no);
      if (data.length === 0) {
        setshowSuccessAlert(false);
        setshowDangerAlert(false);
        setshowInfoAlert(false);
        setshowNullAlert(true);
      } else {
        setNext(data[0].next_selection);
        setTime(data[0].time_selection);
        setGrade(data[0].grade);
        setStatus(data[0].status);
        setTimetable(data[0].timetable);
        setTahapSeleksi(data[0].tahap_seleksi);
        getAlert(data[0].status);
      }
    },
    {
      enabled: false,
    }
  );
  const handleRefetchAnnouncement = () => {
    refetchAnnouncement();
  };

  // get application
  const { refetch: refetchAnnouncementByAtten } = useQuery(
    "attendance",
    async () => {
      const data = await getAnnouncementByAtten(nik, no);
      if (data.length === 0) {
        setshowSuccessAlert(false);
        setshowDangerAlert(false);
        setshowInfoAlert(false);
        setshowNullAlert(true);
      } else {
        setNextSelection(data[0].next_selection);
        setName(data[0].name);
        setNoTest(data[0].no_test);
        setPosition(data[0].position);
        setEmail(data[0].email);
        console.log(data);
      }
    },
    {
      enabled: false,
    }
  );

  const handleRefetchAnnouncementByAtten = () => {
    refetchAnnouncementByAtten();
  };

  const { mutate: attenpost } = useMutation(
    () =>
      postAtten({
        no_test: no_test,
        position: position,
        name: name,
        email: token.email,
        next_selection: next_selection,
        domisili: domisili,
        kehadiran: kehadiran,
        gender: gender,
      }),

    {
      onSuccess: async () => {
        toast.success("Succesfully Send Attendance", {
          autoClose: 1500,
        });
      },
      onError: (err) => {
        toast.error(err.response.data.message, {
          autoClose: 1500,
        });
        console.log(err);
      },
    }
  );

  return (
    <div>
      <section id="" style={{ background: "#f3f5fa" }}>
        <NavBarUser></NavBarUser>
        <div>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "150px",
            }}
          >
            <h4 className="text-uppercase">
              <b style={{ textAlign: "center" }}>
                <center>
                  <span
                    className="text-center"
                    style={{ fontFamily: "Roboto" }}
                  >
                    ANNOUNCEMENT OF
                  </span>
                  <span
                    style={{
                      backgroundPositionY: "100%",
                      paddingBottom: 10,
                      backgroundSize: "contain",
                      color: "#0D4C92",
                      fontFamily: "Roboto",
                    }}
                  >
                    {" "}
                    TEST RESULTS
                  </span>
                </center>
              </b>
            </h4>
          </Container>
        </div>
        <div className="pt-3">
          <Container style={{ marginTop: "80px" }}>
            <div>
              <Card
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="top-bottom"
                className="px-3 py-2 rounded "
                style={{ background: "#A5C0DD" }}
              >
                <Card.Body>
                  <div>
                    <h5 className="fw-bold">Selection Process Timeline</h5>
                    {status === "Lulus" ? (
                      <p
                        className="fs-6 fw-bold"
                        dangerouslySetInnerHTML={{ __html: timetable }}
                      ></p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <h5 className="fw-bold">Test Schedule</h5>
                    {status === "Lulus" ? <p className="fs-6 ">{time}</p> : ""}
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="pt-5">
              <Card
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="top-bottom"
                className="px-3 py-2 rounded "
                style={{ background: "#A5C0DD" }}
              >
                <Card.Body>
                  <p
                    className="fs-5 fw-bold"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontFamily: "Roboto",
                    }}
                  >
                    Enter the Test Number
                  </p>
                  <Row>
                    <Form>
                      <Col
                        sm
                        className="pe-2 pt-3"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <input
                          className="text-center"
                          size="sm"
                          type="text"
                          aria-label="sm input example"
                          value={no}
                          disabled
                        />
                      </Col>
                    </Form>
                    <Col
                      sm
                      className="pt-3"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        className="btn-sm pt-2"
                        onClick={() => handleRefetchAnnouncement()}
                        style={{
                          backgroundColor: "#0D4C92",
                          color: "#FFFFFF",
                          fontFamily: "Roboto",
                        }}
                      >
                        CHECK
                      </Button>
                    </Col>
                  </Row>

                  <div className="Pengumuman">
                    <Alert
                      show={showDangerAlert}
                      variant="danger"
                      className="w-40 mt-3 ml-3 "
                    >
                      Maaf, Kandidat dengan Nomor Test {no} Dinyatakan {status}{" "}
                      Seleksi Tahap {tahapseleksi} dengan Hasil Test {grade}.
                    </Alert>
                    <Alert
                      show={showSuccessAlert}
                      variant="success"
                      className="w-40 mt-3 ml-3"
                    >
                      {next === "Induction" ? (
                        <>
                          Selamat bergabung di PT Sumitomo Wiring System Batam
                          Indonesia! Kandidat dengan Nomor Test {no} dinyatakan{" "}
                          {status}
                          {""} pada tahap {tahapseleksi}
                        </>
                      ) : (
                        <>
                          Kandidat dengan Nomor Test {no} dinyatakan {status}{" "}
                          pada tahap {tahapseleksi}, dan berhak untuk mengikuti
                          tahap selanjutnya yaitu {next}. Silahkan isi
                          konfirmasi kehadiran
                          <Button
                            variant="link"
                            onClick={() => {
                              handleShowModal();
                              handleRefetchAnnouncementByAtten();
                            }}
                          >
                            Form Kehadiran
                          </Button>
                        </>
                      )}
                    </Alert>
                    <Modal show={showModal} onHide={handleCloseModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>Form Kehadiran</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group
                            controlId="exampleForm.ControlInput2"
                            className="mb-3"
                          >
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control
                              disabled
                              value={name}
                              style={{ backgroundColor: "#DDE6ED" }}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group
                            controlId="exampleForm.ControlInput2"
                            className="mb-3"
                          >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              disabled
                              defaultValue={token.email}
                              style={{ backgroundColor: "#DDE6ED" }}
                            />
                          </Form.Group>
                          <Form.Group
                            controlId="exampleForm.ControlInput3"
                            className="mb-3"
                          >
                            <Form.Label>No Test</Form.Label>
                            <Form.Control
                              disabled
                              value={no_test}
                              style={{ backgroundColor: "#DDE6ED" }}
                              onChange={(e) => setNoTest(e.target.value)}
                            />
                          </Form.Group>

                          <Form.Group
                            controlId="exampleForm.ControlInput3"
                            className="mb-3"
                          >
                            <Form.Label>Position</Form.Label>
                            <Form.Control
                              value={position}
                              style={{ backgroundColor: "#DDE6ED" }}
                              onChange={(e) => setPosition(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group
                            controlId="exampleForm.ControlInput3"
                            className="mb-3"
                          >
                            <Form.Label>Tahap Seleksi</Form.Label>
                            <Form.Control
                              disabled
                              value={next_selection}
                              style={{ backgroundColor: "#DDE6ED" }}
                              onChange={(e) => setNextSelection(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group
                            controlId="exampleForm.ControlInput6"
                            className="mb-3"
                          >
                            <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              value={gender !== null ? gender : ""}
                              onChange={(e) => setGender(e.target.value)}
                            >
                              <option defaultValue="">-- Option --</option>
                              <option value="Laki-laki">Laki-laki</option>
                              <option value="Perempuan">Perempuan</option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group
                            controlId="exampleForm.ControlInput6"
                            className="mb-3"
                          >
                            <Form.Label>
                              Apakah saat ini Anda berdomisili di Batam
                            </Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              value={domisili !== null ? domisili : ""}
                              onChange={(e) => setDomisili(e.target.value)}
                            >
                              <option defaultValue="">-- Option --</option>
                              <option value="Ya">Ya</option>
                              <option value="Tidak">Tidak</option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group
                            controlId="exampleForm.ControlInput7"
                            className="mb-3"
                          >
                            <Form.Label>
                              Apakah Anda dapat menghadiri Tes
                            </Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              value={kehadiran !== null ? kehadiran : ""}
                              onChange={(e) => setKehadiran(e.target.value)}
                            >
                              <option defaultValue="">-- Option --</option>
                              <option value="Ya">Ya</option>
                              <option value="Tidak">Tidak</option>
                            </Form.Select>
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => {
                            attenpost();
                            handleCloseModal();
                          }}
                        >
                          Send
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <Alert
                      show={showNullAlert}
                      variant="info"
                      className="w-40 mt-3 ml-3 "
                    >
                      Data tidak di temukan
                    </Alert>
                    <Alert
                      show={showInfoAlert}
                      variant="info"
                      className="w-40 mt-3 ml-3 "
                    >
                      Lowongan sedang dalam proses
                    </Alert>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
        <div style={{ marginTop: "150px" }}></div>
      </section>
      <FooterUser></FooterUser>
    </div>
  );
};

export default Pengumuman;

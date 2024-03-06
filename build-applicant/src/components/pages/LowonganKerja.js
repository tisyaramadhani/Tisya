import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom";
import "./../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "react-query";
import HTMLReactParser from "html-react-parser";
import { getJob } from "../../api/VacancyApi";

const LowonganKerja = () => {
  const [job, setJob] = useState([]);
  const [query, setQuery] = useState("");

  // get jobs
  const { refetch } = useQuery("job", async () => {
    const data = await getJob(query);
    setJob(data);
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // show detail
  const history = useHistory();
  const showDetail = (id) => {
    history.push("/form-lamar/", { state: id });
  };

  return (
    <section id="lowongan-kerja" style={{ marginTop: "50px" }}>
      <div className="container" data-aos="fade-up">
        <div className="vacancy-title">
          <h2>VACANCY INFORMATION</h2>
        </div>
        <Container>
          <Row>
            <Col sm></Col>
            <Col sm>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="fs-5 fw-bold pt-5"
              >
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search Here ..."
                    aria-label="Search"
                    className="mx-2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <Button
                    className="text-center"
                    onClick={refetch}
                    style={{ backgroundColor: "#0D4C92" }}
                  >
                    <Icon icon="akar-icons:search" width="20" height="20" />
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="d-flex align-items-center justify-content-center">
          <Row className="px-3 py-4 pt-4 mt-4 rounded">
            <Col sm>
              {job.map((job, i) => (
                <div id="job" className="pt-3" key={job.id}>
                  <Card
                    data-aos="fade-up"
                    data-aos-delay="200"
                    onClick={() => {
                      if (job.status === 1) {
                        showDetail(job.id);
                      }
                    }}
                    className={
                      job.status === 1 ? "css-lowongan" : "css-lowongan-diss"
                    }
                    style={{ border: "2px solid #0D4C92", width: "100%" }}
                  >
                    <Row>
                      <Col sm>
                        <Card.Body>
                          {job.status === 0 ? "Sedang Tidak Tersedia" : ""}
                          <Card.Title
                            className="fs-3"
                            style={{ color: "#0D4C92" }}
                          >
                            {job.position}
                          </Card.Title>

                          <p className="fs-6 fst-italic">{job.section}</p>
                          <p className="fs-6 fst-italic">
                            {job.application_open} - {job.application_close}
                          </p>
                          <p className="fs-6 fst-italic">{job.updatedAt}</p>
                        </Card.Body>
                      </Col>
                      <Col sm>
                        <Card.Body>
                          <p className="fs-6">Persyaratan dan Kualifikasi</p>
                          {HTMLReactParser(job.qualification)}
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default LowonganKerja;

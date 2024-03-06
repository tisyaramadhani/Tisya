import React , { useState , useEffect }from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBarUser from "./NavBarUser";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from 'react-bootstrap/Modal';
import AOS from "aos";
import "aos/dist/aos.css";

const BerkasUpdate = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    
    return (
      <>
        <NavBarUser></NavBarUser>
        <>
          <div>
            <Container>
              <p data-aos="zoom-out" data-aos-delay ="200"  className="fs-4 fw-bold pt-3 " >
                <strong className="fs-4 fw-bold" style={{ color: "#F90000" }}>
                  {" "}
                  Dokumen
                </strong>
              </p>
              <Row
                className="px-5 py-4 rounded"
                style={{ background: "#E0F4F9" }}
              >
                <Col >
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    
                    >
                     
                      <Form.Label column sm={9}>
                        Surat Lamaran Kerja
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Form CV PT SBI
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Scan KTP
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Scan Ijazah
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Pas Foto 3x4 Bewarna
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Surat Keterangan Sehat dari Pukesmas
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Scan Kartu Keluarga
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Scan Keterangan Domisili saat ini
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Scan surat pengalaman kerja
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Scan Kartu NPWP
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
                <Col >
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Scan Kartu BPJS Kesehatan
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Scan Kartu BPJS Ketenagakerjaan
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Scan Piagam Pengahargaan (tingkat daerah/Nasional)
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Scan Sertifikat Kompetensi / Keahlian
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Scan Sertifikat Vaksin atau Bukti Vaksin
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Surat Hasil Rapid Test
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={9}>
                        Surat Pernyataan aturan kerja
                      </Form.Label>
                      <Col sm={3}>
                      <Button className="btn-sm btn-light border-info"> Lihat Dokumen</Button>
                      </Col>
                    </Form.Group> 
                  </Form>
                  <Row>
                  <Col sm={9}>
                  </Col>
                  <Col sm={3}>
                          <Button className="me-3" variant="primary" size="sm" onClick={handleShow}>
                            Update Berkas
                          </Button>
                          </Col>
                </Row>
                </Col>
                
              </Row>
            </Container>
          </div>

          
          <Modal show={show} onHide={handleClose} centered size='xl' >
        <Modal.Header closeButton>
       
          </Modal.Header>
          <Modal.Body>
            <Container>
            <p data-aos="zoom-out" data-aos-delay ="200"  className="fs-5 fw-bold">Edit <strong style={{"color":"red"}}>Document</strong></p>
            </Container>
         
          <Row
              className="px-5 py-4 rounded"
              style={{ background: "#E0F4F9" }}
            >
              <Col sm>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Surat Lamaran Kerja
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Form CV PT SBI
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Scan KTP
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Scan Ijazah
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Pas Foto 3x4 Bewarna
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Surat Keterangan Sehat dari Pukesmas
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Scan Kartu Keluarga
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Scan Keterangan Domisili saat ini
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Scan surat pengalaman kerja
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Scan Kartu NPWP
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col sm>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Scan Kartu BPJS Kesehatan
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Scan Kartu BPJS Ketenagakerjaan
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Scan Piagam Pengahargaan (tingkat daerah/Nasional)
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Scan Sertifikat Kompetensi / Keahlian
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Scan Sertifikat Vaksin atau Bukti Vaksin
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Surat Hasil Rapid Test
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Surat Pernyataan aturan kerja
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        placeholder="Masukkan File anda"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Row>
                  <Col sm={9}>
                  
                  </Col>
                  <Col sm={3} >
                  <ButtonToolbar aria-label="Toolbar with button groups ">
                  <ButtonGroup className="me-2 " aria-label="First group">
                   <div className="text-end"> 
                   <Button
                    style={{"width":"105px"}}
                      type="button"
                      id="btnSubmit"
                      className="btn btn-primary btn-sm"
                      onClick={handleShow}
                    href='/berkas-update'>
                      Simpan
                    </Button></div>
                  </ButtonGroup>
                </ButtonToolbar>
                  </Col>
                </Row>
               
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        </>
      </>
    );
}

export default BerkasUpdate;

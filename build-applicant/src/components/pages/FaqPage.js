import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="faq-page" style={{ background: "#f3f5fa" }}>
      <div className="container" data-aos="fade-up">
        <div className="vacancy-title">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        <Accordion
          className="mb-4"
          style={{
            maxWidth: "1000px",
            margin: "auto",
            marginTop: "100px",
            border: "1px solid #0D4C92",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                color: "#0D4C92",
              }}
            >
              1. Saya lupa password email saya, apa yang harus saya lakukan ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Roboto",
              }}
            >
              Silahkan klik tombol “FORGOT PASSWORD”, kemudian ikuti instruksi
              untuk memasukkan nomor HP dan Email
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4 mt-4"
          style={{
            maxWidth: "1000px",
            margin: "auto",
            marginTop: "100px",
            border: "1px solid #0D4C92",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                color: "#0D4C92",
              }}
            >
              2. Apakah data diri yang saya isi, bisa disalahgunakan oleh pihak
              perusahaan ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Roboto",
              }}
            >
              Data pelamar yang masuk akan disimpan dan dijaga kerahasiannya di
              database SBI yang nantinya akan digunakan sebagai cadangan apabila
              posisi yang di lamar oleh pelamar di buka kembali.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4 mt-4"
          style={{
            maxWidth: "1000px",
            margin: "auto",
            marginTop: "100px",
            border: "1px solid #0D4C92",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                color: "#0D4C92",
              }}
            >
              3. Apabila saya sudah mengikuti test, apakah hasil tes dapat saya
              ketahui meskipun saya tidak lulus ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Roboto",
              }}
            >
              Hasil test dapat di ketahui dengan mengklik bagian pengumuman,
              kemudian klik Hasil Test, dan masukkan no test anda
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4 mt-4"
          style={{
            maxWidth: "1000px",
            margin: "auto",
            marginTop: "100px",
            border: "1px solid #0D4C92",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                color: "#0D4C92",
              }}
            >
              4. Saya tidak bisa mengakses alamat website yang tertera ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Roboto",
              }}
            >
              Silahkan refresh kembali laman website di computer/laptop anda,
              kemudian silahkan login kembali ke website.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="mb-4 mt-4"
          style={{
            maxWidth: "1000px",
            margin: "auto",
            marginTop: "100px",
            border: "1px solid #0D4C92",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                color: "#0D4C92",
              }}
            >
              5. KTP saya bermasalah. Apakah saya masih bisa mendaftar?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Roboto",
              }}
            >
              Tidak bisa. Silahkan update dan perbaiki data KTP dan Identitas
              anda sebelum melamar di SBI demi menghindari kendala administratif
              di Bank maupun Instansi Pemerintahan seperti BPJS Kesehatan, BPJS
              Ketenagakerjaan, KPP, dan lainnya.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;

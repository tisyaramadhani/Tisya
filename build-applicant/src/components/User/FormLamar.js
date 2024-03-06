import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBarUser from "./NavBarUser";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation, useHistory } from "react-router-dom";
import { getJobById } from "../../api/VacancyApi";
import { getApplicant } from "../../api/UserApi";
import { useQuery } from "react-query";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import FooterUser from "./FooterUser";
import { checkApplication } from "../../api/ApplicationApi";

const FormLamar = () => {
  const [job, setJob] = useState([]);
  const { state } = useLocation();
  const token = jwtDecode(localStorage.getItem("accessToken"));
  const [nik] = useState(token.nik);
  const [name] = useState(token.name);
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [maritalStatus, setMaritalStatus] = useState("");
  const [addressKtp, setAddressKtp] = useState("");
  const [address, setAddress] = useState("");
  const [religion, setReligion] = useState("");
  const [biologicalMotherName, setBiologicalMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [npwp, setNpwp] = useState("");
  const [lastEducation, setLastEducation] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [workExperiencePt, setWorkExperiencePt] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [totalWorkExperience, setTotalWorkExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [experienceDescription, setExperienceDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [expectedWorkingTime, setExpectedWorkingTime] = useState("");
  const [readyShift, setReadyShift] = useState("");
  const [readyAnyDepartment, setReadyAnyDepartment] = useState("");
  const [isStudying, setIsStudying] = useState("");
  const [isWorking, setIsWorking] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [haveSim, setHaveSim] = useState("");
  const [nailLong, setNailLong] = useState("");
  const [hospitalized, setHospitalized] = useState("");
  const [haveDisease, setHaveDisease] = useState("");
  const [smoking, setSmoking] = useState("");
  const [leftHanded, setLeftHanded] = useState("");
  const [distinguishColors, setDistinguishColors] = useState("");
  const [everWorkedSbi, setEverWorkedSbi] = useState("");
  const [readyFollowRulles, setReadyFollowRulles] = useState("");
  const [hobby, setHobby] = useState("");
  const [specialAchievements, setSpecialAchievements] = useState("");
  const [motivation, setMotivation] = useState("");
  const [tribe, setTribe] = useState("");
  const [noHp, setNoHp] = useState("");
  const [noWa, setNoWa] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //tes
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // get Job by id
  useQuery("job", async () => {
    const data = await getJobById(state.state);
    setJob(data);
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' instead of 'smooth' if you prefer an instant scroll
    });
  }, []);

  // lamar job
  const history = useHistory();
  const lamarJob = (id, position) => {
    history.push("/berkas/", { state: id, statePos: position });
  };

  const cvonline = () => {
    history.push("/cvonline-user/", {});
  };

  // get applicant
  const { refetch } = useQuery(
    "applicant",
    async () => {
      const data = await getApplicant(nik);
      setPlaceOfBirth(data.place_of_birth);
      setDateOfBirth(data.date_of_birth);
      setGender(data.gender);
      setHeight(data.height);
      setWeight(data.weight);
      setMaritalStatus(data.marital_status);
      setAddressKtp(data.address_ktp);
      setAddress(data.address);
      setReligion(data.religion);
      setBiologicalMotherName(data.biological_mother_name);
      setFatherName(data.father_name);
      setMotherName(data.mother_name);
      setNpwp(data.npwp);
      setLastEducation(data.last_education);
      setSchoolName(data.school_name);
      setMajor(data.major);
      setGraduationYear(data.graduation_year);
      setWorkExperiencePt(data.work_experience_pt);
      setWorkExperience(data.work_experience);
      setTotalWorkExperience(data.total_work_experience);
      setCompanyName(data.company_name);
      setExperienceDescription(data.experience_description);
      setSkills(data.skills);
      setExpectedSalary(data.expected_salary);
      setExpectedWorkingTime(data.expected_working_time);
      setReadyShift(data.ready_shift);
      setReadyAnyDepartment(data.ready_any_department);
      setIsStudying(data.is_studying);
      setIsWorking(data.is_working);
      setVehicle(data.vehicle);
      setHaveSim(data.have_sim);
      setNailLong(data.nail_long);
      setHospitalized(data.hospitalized);
      setHaveDisease(data.have_disease);
      setSmoking(data.smoking);
      setLeftHanded(data.left_handed);
      setDistinguishColors(data.distinguish_colors);
      setEverWorkedSbi(data.ever_worked_sbi);
      setReadyFollowRulles(data.ready_follow_rulles);
      setHobby(data.hobby);
      setSpecialAchievements(data.special_achievements);
      setMotivation(data.motivation);
      setTribe(data.tribe);
      setNoHp(data.no_hp);
      setNoWa(data.no_wa);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleApply = async () => {
    // Periksa apakah pengguna sudah login
    if (!isLoggedIn) {
      // Jika pengguna belum login, tampilkan pesan pop-up
      toast.error("Harap login terlebih dahulu", {
        autoClose: 1500,
      });
      // Jangan lakukan apa pun setelah menampilkan pesan pop-up
      return;
    }

    const data = await checkApplication(job.id, nik);
    if (data.status === false) {
      toast.error("Anda sudah melamar posisi ini", {
        autoClose: 1500,
      });
      return;
    }

    // Periksa apakah semua bidang dalam CV online sudah diisi
    const isCVComplete =
      name === "" ||
      placeOfBirth === "" ||
      dateOfBirth === "" ||
      gender === "" ||
      height === "" ||
      weight === "" ||
      maritalStatus === "" ||
      addressKtp === "" ||
      address === "" ||
      religion === "" ||
      biologicalMotherName === "" ||
      fatherName === "" ||
      motherName === "" ||
      npwp === "" ||
      lastEducation === "" ||
      schoolName === "" ||
      major === "" ||
      graduationYear === "" ||
      workExperiencePt === "" ||
      workExperience === "" ||
      totalWorkExperience === "" ||
      companyName === "" ||
      experienceDescription === "" ||
      skills === "" ||
      expectedSalary === "" ||
      expectedWorkingTime === "" ||
      readyShift === "" ||
      readyAnyDepartment === "" ||
      isStudying === "" ||
      isWorking === "" ||
      vehicle === "" ||
      haveSim === "" ||
      nailLong === "" ||
      hospitalized === "" ||
      haveDisease === "" ||
      smoking === "" ||
      leftHanded === "" ||
      distinguishColors === "" ||
      everWorkedSbi === "" ||
      readyFollowRulles === "" ||
      hobby === "" ||
      specialAchievements === "" ||
      motivation === "" ||
      tribe === "" ||
      noHp === "" ||
      noWa === "";

    if (isCVComplete) {
      // Jika CV online belum lengkap, tampilkan pesan pop-up
      toast.error("Harap lengkapi cv online anda", {
        autoClose: 1500,
      });
      cvonline();
    } else {
      // Semua syarat terpenuhi, lanjutkan dengan pengajuan lamaran
      lamarJob(job.id, job.position);
    }
  };

  return (
    <div>
      <NavBarUser></NavBarUser>
      <section id="form-lamar" style={{ background: "#f3f5fa" }}>
        <Container fluid="md">
          <div style={{ marginTop: "100px", marginBottom: "50px" }}>
            <h4 className="text-uppercase">
              <b style={{ textAlign: "center" }}>
                <center>
                  <span
                    className="text-center"
                    style={{ fontFamily: "Roboto" }}
                  >
                    DETAIL
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
                    VACANCY
                  </span>
                </center>
              </b>
            </h4>
          </div>
        </Container>
        <Container
          fluid="md"
          style={{ background: "#DDE6ED", marginBottom: "100px" }}
          className="rounded"
        >
          <Row>
            <Col sm={9} className="rounded">
              <div className="px-5 mt-1 pt-3">
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="fs-4 fw-bold"
                  style={{ color: "#0F38A0" }}
                >
                  {job.position}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="fs-5 fst-italic pt-1"
                  style={{ fontFamily: "Roboto" }}
                >
                  Section {job.section}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="fs-5 fw-bold pt-4"
                  style={{ fontFamily: "Roboto" }}
                >
                  Persyaratan dan Kualifikasi
                </p>
                <div dangerouslySetInnerHTML={{ __html: job.qualification }} />

                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="fs-5 fw-bold pt-4"
                  style={{ fontFamily: "Roboto" }}
                >
                  Timeline Rekrutmen dan seleksi
                </p>
                <div dangerouslySetInnerHTML={{ __html: job.timeline }} />
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="fs-5 fw-bold pt-4"
                  style={{ fontFamily: "Roboto" }}
                >
                  Tanggal Bergabung
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: job.estimated_joining }}
                />
                <p
                  className="fs-5 fw-bold pt-4"
                  style={{ fontFamily: "Roboto" }}
                >
                  Tentang Perusahaan
                </p>
                <div dangerouslySetInnerHTML={{ __html: job.about_company }} />
                <div>
                  <p className="fs-4 fw-bold pt-5">
                    <strong
                      className="fs-5 fw-bold"
                      style={{ color: "#F90000", fontFamily: "Roboto" }}
                    >
                      {" "}
                      Catatan : “bebas biaya apapun- rekrutmen tidak dipungut
                      biaya”
                    </strong>
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="position-relative">
                <Button
                  className=" btn  px-3 btn-default w-60 border border-secondary "
                  onClick={() => handleApply()}
                  style={{
                    fontFamily: "Roboto",
                    background: "#0D4C92",
                    marginTop: "50px",
                    marginBottom: "50px",
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div style={{ marginTop: "50px" }}></div>
      <FooterUser></FooterUser>
    </div>
  );
};

export default FormLamar;

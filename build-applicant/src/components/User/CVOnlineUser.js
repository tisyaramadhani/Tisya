import React, { useEffect, useState } from "react";
import NavBarUser from "./NavBarUser";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import jwtDecode from "jwt-decode";
import { useQuery, useMutation } from "react-query";
import { getApplicant, putApplicant } from "../../api/UserApi.js";
import {
  getCertification,
  getMajor,
  getSkill,
  getUniversity,
} from "../../api/MasterApi";
import { toast } from "react-toastify";
import FooterUser from "./FooterUser";

const CVOnlineUser = () => {
  const token = jwtDecode(localStorage.getItem("accessToken"));
  const [nameCertification, setNameCertification] = useState([]);
  const [nameMajor, setNameMajor] = useState([]);
  const [nameSkill, setNameSkill] = useState([]);
  const [nameUniversity, setNameUniversity] = useState([]);
  const [nik, setNik] = useState(token.nik);
  const [name, setName] = useState(token.name);
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
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
  const [customSchool, setCustomSchool] = useState("");
  const [major, setMajor] = useState("");
  const [customMajor, setCustomMajor] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [ipk, setIpk] = useState("");
  const [workExperiencePt, setWorkExperiencePt] = useState("");
  const [customworkExperiencePt, setCustomworkExperiencePt] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [customworkExperience, setCustomworkExperience] = useState("");
  const [customreligion, setCustomReligion] = useState("");
  const [totalWorkExperience, setTotalWorkExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [experienceDescription, setExperienceDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [customSkills, setCustomSkills] = useState("");
  const [certification, setCertification] = useState("");
  const [customCertification, setCustomCertification] = useState("");
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
  const [isWorkedSbi, setIsWorkedSbi] = useState("");
  const [everWorkedSbi, setEverWorkedSbi] = useState("");
  const [readyFollowRulles, setReadyFollowRulles] = useState("");
  const [hobby, setHobby] = useState("");
  const [specialAchievements, setSpecialAchievements] = useState("");
  const [motivation, setMotivation] = useState("");
  const [tribe, setTribe] = useState("");
  const [noHp, setNoHp] = useState("");
  const [noWa, setNoWa] = useState("");
  const [email, setEmail] = useState(token.email);
  const [loading, setLoading] = useState(false);

  const formatCurrency = (value) => {
    // Format the value as Rupiah
    const formattedValue = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

    return formattedValue;
  };

  const handleSalaryChange = (e) => {
    // Remove non-numeric characters
    const inputValue = e.target.value.replace(/[^0-9]/g, "");

    // Update state with the formatted value
    setExpectedSalary(formatCurrency(inputValue));
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
      setIpk(data.ipk);
      setWorkExperiencePt(data.work_experience_pt);
      setWorkExperience(data.work_experience);
      setTotalWorkExperience(data.total_work_experience);
      setCompanyName(data.company_name);
      setExperienceDescription(data.experience_description);
      setSkills(data.skills);
      setCertification(data.certification);
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
      setIsWorkedSbi(data.is_worked_sbi);
      setEverWorkedSbi(data.ever_worked_sbi);
      setReadyFollowRulles(data.ready_follow_rulles);
      setHobby(data.hobby);
      setSpecialAchievements(data.special_achievements);
      setMotivation(data.motivation);
      setTribe(data.tribe);
      setNoHp(data.no_hp);
      setNoWa(data.no_wa);
      setCustomMajor(data.major);
      setCustomSkills(data.skills);
      setCustomCertification(data.certification);
      setCustomSchool(data.school_name);
      setCustomworkExperience(data.work_experience);
      setCustomworkExperiencePt(data.work_experience_pt);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  useQuery("certification", async () => {
    const data = await getCertification();
    setNameCertification(data);
  });

  useQuery("major", async () => {
    const data = await getMajor();
    setNameMajor(data);
  });

  useQuery("skill", async () => {
    const data = await getSkill();
    setNameSkill(data);
  });

  useQuery("university", async () => {
    const data = await getUniversity();
    setNameUniversity(data);
  });

  // put applicant
  const { mutate: applicantPut } = useMutation(
    () =>
      putApplicant(nik, {
        place_of_birth: placeOfBirth,
        date_of_birth: dateOfBirth,
        gender: gender,
        height: height,
        weight: weight,
        marital_status: maritalStatus,
        address_ktp: addressKtp,
        address: address,
        religion: religion !== "Lainnya" ? religion : customreligion,
        biological_mother_name: biologicalMotherName,
        father_name: fatherName,
        mother_name: motherName,
        npwp: npwp,
        last_education: lastEducation,
        school_name: schoolName !== "Lainnya" ? schoolName : customSchool,
        major: major !== "Lainnya" ? major : customMajor,
        graduation_year: graduationYear,
        ipk: ipk,
        work_experience_pt:
          workExperiencePt !== "Lainnya"
            ? workExperiencePt
            : customworkExperiencePt,
        work_experience:
          workExperience !== "Lainnya" ? workExperience : customworkExperience,
        total_work_experience: totalWorkExperience,
        company_name: companyName,
        experience_description: experienceDescription,
        skills: skills !== "Lainnya" ? skills : customSkills,
        certification:
          certification !== "Lainnya" ? certification : customCertification,
        expected_salary: expectedSalary,
        expected_working_time: expectedWorkingTime,
        ready_shift: readyShift,
        ready_any_department: readyAnyDepartment,
        is_studying: isStudying,
        is_working: isWorking,
        vehicle: vehicle,
        have_sim: haveSim,
        nail_long: nailLong,
        hospitalized: hospitalized,
        have_disease: haveDisease,
        smoking: smoking,
        left_handed: leftHanded,
        distinguish_colors: distinguishColors,
        is_worked_sbi: isWorkedSbi,
        ever_worked_sbi: everWorkedSbi,
        ready_follow_rulles: readyFollowRulles,
        hobby: hobby,
        special_achievements: specialAchievements,
        motivation: motivation,
        tribe: tribe,
        no_hp: noHp,
        no_wa: noWa,
      }),
    {
      onSuccess: async () => {
        setLoading(false);
        await refetch();
        toast.success("Successfully save data", {
          autoClose: 1500,
        });
      },
      onError: (err) => {
        setLoading(false);
        toast.error(err.response.data.message, {
          autoClose: 1500,
        });
      },
    }
  );

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <NavBarUser></NavBarUser>
      <section id="" style={{ background: "#f3f5fa" }}>
        <div>
          <Container style={{ marginTop: "100px" }}>
            <h4 className="text-uppercase">
              <b style={{ textAlign: "center" }}>
                <center>
                  <span
                    className="text-center"
                    style={{ fontFamily: "Roboto" }}
                  >
                    CV
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
                    ONLINE
                  </span>
                </center>
              </b>
            </h4>
          </Container>
        </div>
        <div className="pt-1">
          <Container
            className="rounded pb-5 "
            style={{
              background: "#DDE6ED",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Row
              className="pt-4"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col xs={9} md={6}>
                <Form size="sm">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={3}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Nama Lengkap
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        disabled
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={3}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Tempat Lahir
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        value={placeOfBirth}
                        onChange={(e) => setPlaceOfBirth(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={3}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Jenis Kelamin
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Select
                        aria-label="Default select example"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        <option value="Laki-laki">Laki-Laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={3}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Status Pernikahan
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Select
                        aria-label="Default select example"
                        value={maritalStatus}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        <option value="Belum Menikah">Belum Menikah</option>
                        <option value="Sudah Menikah">Sudah Menikah</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={3}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Domisili di Batam
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={3}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Nama Lengkap Ayah
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={3}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      NPWP
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        value={npwp}
                        onChange={(e) => setNpwp(e.target.value)}
                      />
                      <Form.Text
                        className="text-danger"
                        style={{ fontFamily: "Roboto" }}
                      >
                        *jika tidak memiliki isi dengan tanda strip (-)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={3}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Jurusan
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Select
                        aria-label="Default select example"
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        {nameMajor.map((major) => (
                          <option key={major.name} value={major.name}>
                            {major.name}
                          </option>
                        ))}
                        <option value="Lainnya">Lainnya</option>
                      </Form.Select>
                      {major === "Lainnya" && (
                        <>
                          <Form.Label
                            style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                          >
                            Jurusan Lainnya
                          </Form.Label>
                          <Form.Control
                            type="text"
                            value={customMajor}
                            onChange={(e) => setCustomMajor(e.target.value)}
                            style={{ fontFamily: "Roboto" }}
                          />
                        </>
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={3}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Tahun Lulus
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="number"
                        value={graduationYear}
                        onChange={(e) => setGraduationYear(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={8}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Pengalaman Kerja Bukan di PT
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Select
                        aria-label="Default select example"
                        value={workExperience}
                        onChange={(e) => setWorkExperience(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        <option value="Kasir">Kasir</option>
                        <option value="Helper Bangunan">Helper Bangunan</option>
                        <option value="Penjaga Toko">Penjaga Toko</option>
                        <option value="Sales">Sales</option>
                        <option value="Tidak Ada">Tidak Ada</option>
                        <option value="Lainnya">Lainnya</option>
                      </Form.Select>
                      {workExperience === "Lainnya" && (
                        <>
                          <Form.Label
                            style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                          >
                            Pengalaman Lainnya
                          </Form.Label>
                          <Form.Control
                            type="text"
                            value={customworkExperience}
                            onChange={(e) =>
                              setCustomworkExperience(e.target.value)
                            }
                            style={{ fontFamily: "Roboto" }}
                          />
                        </>
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={3}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Nama Perusahaan (Pernah Bekerja)
                    </Form.Label>

                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={4}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Keahlian Khusus( Sudah Teruji dan Terverifikasi)
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Select
                        aria-label="Default select example"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        {nameSkill.map((skill) => (
                          <option key={skill.name} value={skill.name}>
                            {skill.name}
                          </option>
                        ))}
                        <option value="Lainnya">Lainnya</option>
                      </Form.Select>
                      {skills === "Lainnya" && (
                        <>
                          <Form.Label
                            style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                          >
                            Skill Lainnya
                          </Form.Label>
                          <Form.Control
                            type="text"
                            value={customSkills}
                            onChange={(e) => setCustomSkills(e.target.value)}
                            style={{ fontFamily: "Roboto" }}
                          />
                        </>
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={4}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Sertifikasi yang dimiliki
                    </Form.Label>

                    <Col sm={8}>
                      <Form.Select
                        aria-label="Default select example"
                        value={certification}
                        onChange={(e) => setCertification(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        {nameCertification.map((certification) => (
                          <option
                            key={certification.name}
                            value={certification.name}
                          >
                            {certification.name}
                          </option>
                        ))}
                        <option value="Lainnya">Lainnya</option>
                      </Form.Select>
                      {certification === "Lainnya" && (
                        <>
                          <Form.Label
                            style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                          >
                            Sertifikasi Lainnya
                          </Form.Label>
                          <Form.Control
                            type="text"
                            value={customCertification}
                            onChange={(e) =>
                              setCustomCertification(e.target.value)
                            }
                            style={{ fontFamily: "Roboto" }}
                          />
                        </>
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={4}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Upah yang Diharapkan setiap bulan
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        value={expectedSalary}
                        onChange={handleSalaryChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={8}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Apakah anda bersedia bekerja dengan sistem pembagian shift
                      ? (shift pagi dan malam)
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Select
                        aria-label="Default select example"
                        value={readyShift}
                        onChange={(e) => setReadyShift(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        <option value="Ya">Ya</option>
                        <option value="Tidak">Tidak</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={8}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Apakah saat ini anda sedang berkuliah?
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Select
                        aria-label="Default select example"
                        value={isStudying}
                        onChange={(e) => setIsStudying(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        <option value="Ya">Ya</option>
                        <option value="Tidak">Tidak</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={4}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Kendaraan yang akan digunakan untuk berangkat kerja
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={8}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Apakah anda suka memelihara kuku hingga panjang?
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Select
                        aria-label="Default select example"
                        value={nailLong}
                        onChange={(e) => setNailLong(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        <option value="Ya">Ya</option>
                        <option value="Tidak">Tidak</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={8}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Apakah anda merokok?
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Select
                        aria-label="Default select example"
                        value={smoking}
                        onChange={(e) => setSmoking(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        <option value="Ya">Ya</option>
                        <option value="Tidak">Tidak</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={8}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Apakah anda dapat membedakan warna dengan baik?
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Select
                        aria-label="Default select example"
                        value={distinguishColors}
                        onChange={(e) => setDistinguishColors(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        <option value="Ya">Ya</option>
                        <option value="Tidak">Tidak</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={8}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Apakah anda sudah pernah bekerja di SBI?
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Select
                        aria-label="Default select example"
                        value={isWorkedSbi}
                        onChange={(e) => setIsWorkedSbi(e.target.value)}
                        style={{ fontFamily: "Roboto" }}
                      >
                        <option defaultValue="">-- Option --</option>
                        <option value="Ya">Ya</option>
                        <option value="Tidak">Tidak</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={4}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Nomor Induk Karyawan(NIK) lama
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        value={everWorkedSbi}
                        onChange={(e) => setEverWorkedSbi(e.target.value)}
                      />
                      <Form.Text
                        className="text-danger"
                        style={{ fontFamily: "Roboto" }}
                      >
                        *Hanya diisi bagi yang pernah bergabung dengan sumitomo,
                        jika belum pernah isi 0 atau tanda strip (-)
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={4}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Hobby
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        value={hobby}
                        onChange={(e) => setHobby(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={4}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Motivasi Dalam Bekerja
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        value={motivation}
                        onChange={(e) => setMotivation(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={4}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Nomor HP Aktif
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        value={noHp}
                        onChange={(e) => setNoHp(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label
                      column="true"
                      sm={3}
                      style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                    >
                      Nomor WhatsApp aktif
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="number"
                        value={noWa}
                        onChange={(e) => setNoWa(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={9} md={6}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Nomor KTP
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      disabled
                      value={nik}
                      onChange={(e) => setNik(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={7}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Tanggal Lahir
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Tinggi Badan
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Control
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </Col>
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Berat Badan
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Control
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Alamat di KTP
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={addressKtp}
                      onChange={(e) => setAddressKtp(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Agama
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      aria-label="Default select example"
                      value={religion}
                      onChange={(e) => setReligion(e.target.value)}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <option defaultValue="">-- Option --</option>
                      <option value="Islam">Islam</option>
                      <option value="Kristen">Kristen</option>
                      <option value="Katolik">Katolik</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Budha">Budha</option>
                      <option value="Khong Hu Cu">Khong Hu Cu</option>
                      <option value="Lainnya">Lainnya</option>
                    </Form.Select>
                    {religion === "Lainnya" && (
                      <>
                        <Form.Label
                          style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                        >
                          Agama Lainnya
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={customreligion}
                          onChange={(e) => setCustomReligion(e.target.value)}
                          style={{ fontFamily: "Roboto" }}
                        />
                      </>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Nama Ibu Kandung
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={biologicalMotherName}
                      onChange={(e) => setBiologicalMotherName(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Nama Lengkap Ibu
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={motherName}
                      onChange={(e) => setMotherName(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Pendidikan Terakhir
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={lastEducation}
                      onChange={(e) => setLastEducation(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Nama Sekolah/Universitas
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      aria-label="Default select example"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <option defaultValue="">-- Option --</option>
                      {nameUniversity.map((university) => (
                        <option key={university.name} value={university.name}>
                          {university.name}
                        </option>
                      ))}
                      <option value="Lainnya">Lainnya</option>
                    </Form.Select>
                    {schoolName === "Lainnya" && (
                      <>
                        <Form.Label
                          style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                        >
                          Sekolah Lainnya
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={customSchool}
                          onChange={(e) => setCustomSchool(e.target.value)}
                          style={{ fontFamily: "Roboto" }}
                        />
                      </>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    IPK
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={ipk}
                      onChange={(e) => setIpk(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={7}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Pengalaman Kerja di Perusahaan
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Select
                      aria-label="Default select example"
                      value={workExperiencePt}
                      onChange={(e) => setWorkExperiencePt(e.target.value)}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <option defaultValue="">-- Option --</option>
                      <option value="Operator Assembly">
                        Operator Assembly
                      </option>
                      <option value="Operator C&C">Operator C&C</option>
                      <option value="Inspector/QAQC Operator">
                        Inspector/QAQC Operator
                      </option>
                      <option value="Administration">Administration</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Driver Forklift">Driver Forklift</option>
                      <option value="Operator Warehouse">
                        Operator Warehouse
                      </option>
                      <option value="Dandory">Dandory</option>
                      <option value="Leader">Leader</option>
                      <option value="belum berpengalaman">
                        belum berpengalaman
                      </option>
                      <option value="Lainnya">lainnya</option>
                    </Form.Select>
                    {workExperiencePt === "Lainnya" && (
                      <>
                        <Form.Label
                          style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                        >
                          Pengalaman Lainnya
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={customworkExperiencePt}
                          onChange={(e) =>
                            setCustomworkExperiencePt(e.target.value)
                          }
                          style={{ fontFamily: "Roboto" }}
                        />
                      </>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Total Pengalaman Kerja
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      aria-label="Default select example"
                      value={totalWorkExperience}
                      onChange={(e) => setTotalWorkExperience(e.target.value)}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <option defaultValue="">-- Option --</option>
                      <option value="Kurang dari 1 Tahun">
                        kurang dari 1 Tahun
                      </option>
                      <option value="1-3 Tahun">1-3 Tahun</option>
                      <option value="3-5 Tahun">3-5 Tahun</option>
                      <option value="lebih 5 tahun">Lebih dari 5 Tahun</option>
                      <option value="Tidak berpengalaman">
                        Tidak Berpengalaman
                      </option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Deskripsi Pengalaman Kerja (Tahun-Posisi-Nama PT)
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={experienceDescription}
                      onChange={(e) => setExperienceDescription(e.target.value)}
                    />
                    <Form.Text
                      className="text-danger"
                      style={{ fontFamily: "Roboto" }}
                    >
                      *jika tidak memiliki isi dengan tanda strip (-)
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Masa Kerja yang diharapkan
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      aria-label="Default select example"
                      value={expectedWorkingTime}
                      onChange={(e) => setExpectedWorkingTime(e.target.value)}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <option defaultValue="">-- Option --</option>
                      <option value=" kurang 6 bulan">
                        kurang dari 6 Bulan
                      </option>
                      <option value="6 bulan - 1 tahun">
                        6 Bulan - 1 Tahun
                      </option>
                      <option value="1-3 tahun">1-3 Tahun</option>
                      <option value="5 tahun - pensiun">
                        5 Tahun - Pensiun
                      </option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={8}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Apakah anda bersedia ditempatkan di departemen manapun?
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Select
                      aria-label="Default select example"
                      value={readyAnyDepartment}
                      onChange={(e) => setReadyAnyDepartment(e.target.value)}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <option defaultValue="">-- Option --</option>
                      <option value="Ya">Ya</option>
                      <option value="Tidak">Tidak</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={8}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Apakah saat ini anda memiliki pekerjaan lainnya?
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Select
                      aria-label="Default select example"
                      value={isWorking}
                      onChange={(e) => setIsWorking(e.target.value)}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <option defaultValue="">-- Option --</option>
                      <option value="Ya">Ya</option>
                      <option value="Tidak">Tidak</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={8}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Apakah anda sudah memiliki SIM dan masih aktif (berlaku)?
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Select
                      aria-label="Default select example"
                      value={haveSim}
                      onChange={(e) => setHaveSim(e.target.value)}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <option defaultValue="">-- Option --</option>
                      <option value="Ya">Ya</option>
                      <option value="Tidak">Tidak</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Apakah anda memiliki riwayat penyakit? jika ya, sebutkan
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={haveDisease}
                      onChange={(e) => setHaveDisease(e.target.value)}
                    />
                    <Form.Text
                      className="text-danger"
                      style={{ fontFamily: "Roboto" }}
                    >
                      *jika tidak memiliki isi dengan tanda strip (-)
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Apakah anda pernah rawat inap di Rumah Sakit?
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      aria-label="Default select example"
                      value={hospitalized}
                      onChange={(e) => setHospitalized(e.target.value)}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <option defaultValue="">-- Option --</option>
                      <option value="Ya">Ya</option>
                      <option value="Tidak">Tidak</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={8}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Apakah anda kidal?
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Select
                      aria-label="Default select example"
                      value={leftHanded}
                      onChange={(e) => setLeftHanded(e.target.value)}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <option defaultValue="">-- Option --</option>
                      <option value="Ya">Ya</option>
                      <option value="Tidak">Tidak</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={8}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Apakah anda selalu bersedia untuk mematuhi semua aturan,
                    pengaturan, maupun kebijakan yang diterapkan oleh Perusahaan
                    jika diterima bekerja?
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Select
                      aria-label="Default select example"
                      value={readyFollowRulles}
                      onChange={(e) => setReadyFollowRulles(e.target.value)}
                      style={{ fontFamily: "Roboto" }}
                    >
                      <option defaultValue="">-- Option --</option>
                      <option value="Ya">Ya</option>
                      <option value="Tidak">Tidak</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Prestasi Khusus
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={specialAchievements}
                      onChange={(e) => setSpecialAchievements(e.target.value)}
                    />
                    <Form.Text
                      className="text-danger"
                      style={{ fontFamily: "Roboto" }}
                    >
                      *jika tidak memiliki isi dengan tanda strip (-)
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Suku
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      value={tribe}
                      onChange={(e) => setTribe(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column="true"
                    sm={3}
                    style={{ fontFamily: "Roboto", color: "#0D4C92" }}
                  >
                    Alamat Email
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      disabled
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <div>
                  <Row>
                    <Col sm={7}></Col>
                    <Col sm={5}>
                      <Button
                        className="me-3"
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          setLoading(true);
                          applicantPut(nik);
                        }}
                        style={{
                          backgroundColor: "#0D4C92",
                          color: "#FFFFFF",
                          fontFamily: "Roboto",
                        }}
                        disabled={loading}
                      >
                        {loading ? "LOADING..." : "Save"}
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <div style={{ marginTop: "50px" }}> </div>
      <FooterUser></FooterUser>
    </div>
  );
};

export default CVOnlineUser;

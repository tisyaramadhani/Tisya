import Applicant from "./../models/applicant.model.js";

export const getApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.findAll();
    res.status(200).send(applicants);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getApplicant = async (req, res) => {
  try {
    const applicant = await Applicant.findOne({
      where: {
        nik: req.params.nik,
      },
    });
    if (!applicant) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(applicant);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postApplicant = async (req, res) => {
  const {
    nik,
    name,
    place_of_birth,
    date_of_birth,
    gender,
    height,
    weight,
    marital_status,
    address_ktp,
    address,
    religion,
    biological_mother_name,
    father_name,
    mother_name,
    npwp,
    last_education,
    school_name,
    major,
    graduation_year,
    ipk,
    work_experience_pt,
    work_experience,
    total_work_experience,
    company_name,
    experience_description,
    skills,
    certification,
    expected_salary,
    expected_working_time,
    ready_shift,
    ready_any_department,
    is_studying,
    is_working,
    vehicle,
    have_sim,
    nail_long,
    hospitalized,
    have_disease,
    smoking,
    left_handed,
    distinguish_colors,
    is_worked_sbi,
    ever_worked_sbi,
    ready_follow_rulles,
    hobby,
    special_achievements,
    motivation,
    tribe,
    no_hp,
    no_wa,
    email,
    domisili,
    kehadiran,
  } = req.body;
  try {
    await Applicant.create({
      nik: nik,
      name: name,
      place_of_birth: place_of_birth,
      date_of_birth: date_of_birth,
      gender: gender,
      height: height,
      weight: weight,
      marital_status: marital_status,
      address_ktp: address_ktp,
      address: address,
      religion: religion,
      biological_mother_name: biological_mother_name,
      father_name: father_name,
      mother_name: mother_name,
      npwp: npwp,
      last_education: last_education,
      school_name: school_name,
      major: major,
      graduation_year: graduation_year,
      ipk: ipk,
      work_experience_pt: work_experience_pt,
      work_experience: work_experience,
      total_work_experience: total_work_experience,
      company_name: company_name,
      experience_description: experience_description,
      skills: skills,
      certification: certification,
      expected_salary: expected_salary,
      expected_working_time: expected_working_time,
      ready_shift: ready_shift,
      ready_any_department: ready_any_department,
      is_studying: is_studying,
      is_working: is_working,
      vehicle: vehicle,
      have_sim: have_sim,
      nail_long: nail_long,
      hospitalized: hospitalized,
      have_disease: have_disease,
      smoking: smoking,
      left_handed: left_handed,
      distinguish_colors: distinguish_colors,
      is_worked_sbi: is_worked_sbi,
      ever_worked_sbi: ever_worked_sbi,
      ready_follow_rulles: ready_follow_rulles,
      hobby: hobby,
      special_achievements: special_achievements,
      motivation: motivation,
      tribe: tribe,
      no_hp: no_hp,
      no_wa: no_wa,
      email: email,
      domisili: domisili,
      kehadiran: kehadiran,
    });
    res.status(201).send({ message: "Create Applicant Successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateApplicant = async (req, res) => {
  const {
    nik,
    name,
    place_of_birth,
    date_of_birth,
    gender,
    height,
    weight,
    marital_status,
    address_ktp,
    address,
    religion,
    biological_mother_name,
    father_name,
    mother_name,
    npwp,
    last_education,
    school_name,
    major,
    graduation_year,
    ipk,
    work_experience_pt,
    work_experience,
    total_work_experience,
    company_name,
    experience_description,
    skills,
    certification,
    expected_salary,
    expected_working_time,
    ready_shift,
    ready_any_department,
    is_studying,
    is_working,
    vehicle,
    have_sim,
    nail_long,
    hospitalized,
    have_disease,
    smoking,
    left_handed,
    distinguish_colors,
    is_worked_sbi,
    ever_worked_sbi,
    ready_follow_rulles,
    hobby,
    special_achievements,
    motivation,
    tribe,
    no_hp,
    no_wa,
    email,
  } = req.body;
  try {
    const applicant = await Applicant.update(
      {
        nik: nik,
        name: name,
        place_of_birth: place_of_birth,
        date_of_birth: date_of_birth,
        gender: gender,
        height: height,
        weight: weight,
        marital_status: marital_status,
        address_ktp: address_ktp,
        address: address,
        religion: religion,
        biological_mother_name: biological_mother_name,
        father_name: father_name,
        mother_name: mother_name,
        npwp: npwp,
        last_education: last_education,
        school_name: school_name,
        major: major,
        graduation_year: graduation_year,
        ipk: ipk,
        work_experience_pt: work_experience_pt,
        work_experience: work_experience,
        total_work_experience: total_work_experience,
        company_name: company_name,
        experience_description: experience_description,
        skills: skills,
        certification: certification,
        expected_salary: expected_salary,
        expected_working_time: expected_working_time,
        ready_shift: ready_shift,
        ready_any_department: ready_any_department,
        is_studying: is_studying,
        is_working: is_working,
        vehicle: vehicle,
        have_sim: have_sim,
        nail_long: nail_long,
        hospitalized: hospitalized,
        have_disease: have_disease,
        smoking: smoking,
        left_handed: left_handed,
        distinguish_colors: distinguish_colors,
        is_worked_sbi: is_worked_sbi,
        ever_worked_sbi: ever_worked_sbi,
        ready_follow_rulles: ready_follow_rulles,
        hobby: hobby,
        special_achievements: special_achievements,
        motivation: motivation,
        tribe: tribe,
        no_hp: no_hp,
        no_wa: no_wa,
        email: email,
      },
      {
        where: {
          nik: req.nik,
        },
      }
    );
    if (applicant == 0)
      return res.status(404).send({ message: "Data not found" });
    res.status(200).send({ message: "Update Applicant Successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteApplicant = async (req, res) => {
  try {
    const applicant = await Applicant.destroy({
      where: {
        nik: req.nik,
      },
    });
    if (!applicant) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({
      message: "Successfully delete data",
      id: req.params.id,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

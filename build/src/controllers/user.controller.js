import User from "../models/user.model.js";
import Applicant from "../models/applicant.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import { config } from "dotenv";
import { sendEmail, sendEmailInterviewer } from "./../utils/sendEmail.js";
config();

let message;
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: "password",
      },
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: "password",
      },
    });
    if (!user) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const postInterviewer = async (req, res) => {
  const { nik, name, email, password, verified, roles_id } = req.body;

  if (nik.length !== 6) {
    return res
      .status(400)
      .send({ message: "NIK must be exactly 6 characters long." });
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({
      nik: nik,
      name: name,
      email: email,
      password: hashPassword,
      verified: verified,
      roles_id: roles_id,
    });
    sendEmailInterviewer(user.email, "Akun Berhasil Dibuat", password);
    // res.status(201).send(message);
    res.status(201).send({
      message:
        "Create account successfully, please check your email for get password",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getInterviewer = async (req, res) => {
  try {
    const interviewers = await User.findAll({
      where: {
        roles_id: 2,
      },
    });
    res.status(200).send(interviewers);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { nik, name, email, password, verified, roles_id } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const user = await User.update(
      {
        nik: nik,
        name: name,
        email: email,
        password: hashPassword,
        verified: verified,
        roles_id: roles_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (user == 0) return res.status(404).send({ message: "Data not found" });
    res.status(200).send({ message: "Successfully update data" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!user) return res.status(404).send({ message: "Data not found!" });
    res.status(200).send({
      message: "Successfully delete data",
      id: req.params.id,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const signup = async (req, res) => {
  const {
    nik,
    name,
    email,
    password,
    confPassword,
    roles_id,
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
    ever_worked_sbi,
    ready_follow_rulles,
    hobby,
    special_achievements,
    motivation,
    tribe,
    no_hp,
    no_wa,
  } = req.body;

  if (nik.length !== 16) {
    return res
      .status(400)
      .send({ message: "NIK must be exactly 16 characters long." });
  }

  if (password != confPassword) {
    return res
      .status(404)
      .send({ message: "Password and Confirm password must be same!" });
  }
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
  if (!passwordRegex.test(password)) {
    return res.status(400).send({
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.",
    });
  }
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({
      nik: nik,
      name: name,
      email: email,
      password: hashPassword,
      roles_id: roles_id,
    });
    let token = jwt.sign(
      {
        nik: user.nik,
      },
      process.env.ACCESS_TOKEN_SECRET
    );
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
      ever_worked_sbi: ever_worked_sbi,
      ready_follow_rulles: ready_follow_rulles,
      hobby: hobby,
      special_achievements: special_achievements,
      motivation: motivation,
      tribe: tribe,
      no_hp: no_hp,
      no_wa: no_wa,
      email: email,
    });

    message = `${process.env.BASE_URL}/verify/${token}`;
    sendEmail(
      user.email,
      "Verifikasi Email",
      "mengkonfirmasi alamat email",
      message
    );
    // res.status(201).send(message);
    res.status(201).send({
      message: "Create account successfully, please verify your email",
    });
  } catch (error) {
    console.log(error);
    if (error.name === "SequelizeValidationError") {
      return res.status(400).send({
        // message: error.errors.map(e => e.message)
        message: error.errors[0].message,
      });
    } else {
      res.status(500).send({ message: error.message });
    }
  }
};

// error bagian jika gagal verify, token valid atau invalid link, error nya : Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
export const verifyEmail = async (req, res) => {
  try {
    jwt.verify(
      req.params.token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.status(400).send({ message: "Token not valid" });
        req.nik = decoded.nik;
      }
    );
    const user = await User.findOne({
      where: {
        nik: req.nik,
      },
    });
    if (!user) return res.status(404).send({ message: "Invalid Link" });
    await User.update(
      {
        verified: true,
      },
      {
        where: {
          nik: req.nik,
        },
      }
    );
    const emailTemplate = `
    <html>
    <head>
      <title>Email Confirmation</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f5f5f5;
          text-align: center;
          padding: 20px;
        }
        h1 {
          color: #007bff;
        }
        p {
          color: #333;
          font-size: 18px;
        }
        .login-button {
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          background-color: #007bff;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <h1>Email Confirmed</h1>
      <p>Your email has been successfully verified.</p>
      <a class="login-button" href="http://localhost:3000/sign-in">Login</a>
    </body>
  </html>
  `;

    // Send HTML content as the response
    res.send(emailTemplate);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email: email,
        [Op.or]: [{ roles_id: 1 }, { roles_id: 2 }],
      },
    });
    if (!user) return res.status(404).send({ message: "User not found!" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send({ message: "Invalid Password" });
    if (!user.verified) {
      let token = jwt.sign(
        {
          nik: user.nik,
        },
        process.env.ACCESS_TOKEN_SECRET
      );
      message = `${process.env.BASE_URL}/verify/${token}`;
      sendEmail(
        user.email,
        "Verifikasi Email",
        "mengkonfirmasi alamat email",
        message
      );
      return res.status(400).send({ message: "Please verify your email" });
    }
    // membuat token
    const token = jwt.sign(
      {
        id: user.id,
        nik: user.nik,
        name: user.name,
        email: user.email,
        roles_id: user.roles_id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    const refreshtoken = jwt.sign(
      {
        id: user.id,
        nik: user.nik,
        name: user.name,
        email: user.email,
        roles_id: user.roles_id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    // Verifikasi token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res
            .status(401)
            .send({ message: "Token has expired. Please login again." });
        } else {
          return res.status(403).send({ message: "Invalid token" });
        }
      }

      // Token valid, memberikan respons kepada klien
      res.status(200).send({ token, refreshtoken });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const refreshToken = async (req, res) => {
  const refreshToken = req.body.refreshtoken;

  if (!refreshToken) {
    return res.status(400).json({ message: "Refresh token is required." });
  }

  jwt.verify(refreshToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Invalid refresh token." });
    }

    const token = jwt.sign(
      {
        id: user.id,
        nik: user.nik,
        name: user.name,
        email: user.email,
        roles_id: user.roles_id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    const refreshtoken = jwt.sign(
      {
        id: user.id,
        nik: user.nik,
        name: user.name,
        email: user.email,
        roles_id: user.roles_id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, refreshtoken });
  });
};

export const signinUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email: email,
        roles_id: 3,
      },
    });
    if (!user) return res.status(404).send({ message: "User not found!" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send({ message: "Invalid Password" });
    if (!user.verified) {
      let token = jwt.sign(
        {
          nik: user.nik,
        },
        process.env.ACCESS_TOKEN_SECRET
      );
      message = `${process.env.BASE_URL}/verify/${token}`;
      sendEmail(
        user.email,
        "Verifikasi Email",
        "mengkonfirmasi alamat email",
        message
      );
      return res.status(400).send({ message: "Please verify your email" });
    }

    // Membuat token dengan opsi expiresIn
    const token = jwt.sign(
      {
        id: user.id,
        nik: user.nik,
        name: user.name,
        email: user.email,
        roles_id: user.roles_id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    const refreshtoken = jwt.sign(
      {
        id: user.id,
        nik: user.nik,
        name: user.name,
        email: user.email,
        roles_id: user.roles_id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    // Verifikasi token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res
            .status(401)
            .send({ message: "Token has expired. Please login again." });
        } else {
          return res.status(403).send({ message: "Invalid token" });
        }
      }

      // Token valid, memberikan respons kepada klien
      res.status(200).send({ token, refreshtoken });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const sendLinkForgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email: email,
        roles_id: 3,
      },
    });
    if (!user) return res.status(404).send({ message: "Account not found" });
    let token = jwt.sign(
      {
        nik: user.nik,
      },
      process.env.ACCESS_TOKEN_SECRET
      // {
      //   expiresIn: "1h",
      // }
    );
    message = `${process.env.USER_BASE_URL}/pass-baru/${token}`;
    sendEmail(user.email, "Rubah Password", "merubah password", message);
    res.status(200).send({ message: "Successfully Send link Change Password" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getLinkForgotPassword = async (req, res) => {
  try {
    jwt.verify(
      req.params.token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.status(400).send("Token not valid");
        req.nik = decoded.nik;
      }
    );
    const user = await User.findOne({
      where: {
        nik: req.nik,
      },
    });
    if (!user) return res.status(400).send({ message: "Invalid Link" });
    res.status(200).send({ message: "Successfully Link Forgot Password" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const forgotPassword = async (req, res) => {
  const { password, confPassword } = req.body;
  try {
    jwt.verify(
      req.params.token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.status(400).send("Token not valid");
        req.nik = decoded.nik;
      }
    );
    if (password != confPassword)
      return res
        .status(404)
        .send({ message: "Password and Confirm password must be same!" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.update(
      {
        password: hashPassword,
      },
      {
        where: {
          nik: req.nik,
        },
      }
    );
    res.status(200).send({ message: "succefully change password" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const changePasswordUser = async (req, res) => {
  const { password, confPassword } = req.body;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
  if (!passwordRegex.test(password)) {
    return res.status(400).send({
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.",
    });
  }
  try {
    if (password != confPassword)
      return res
        .status(404)
        .send({ message: "Password and Confirm password must be same!" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    await User.update(
      {
        password: hashPassword,
      },
      {
        where: {
          id: req.id,
        },
      }
    );
    res.status(200).send({ message: "succefully change password" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const signout = (req, res) => {
  try {
    res.status(200).send({ message: "Successfully Logged out" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

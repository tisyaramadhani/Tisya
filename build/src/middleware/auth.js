import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const { TokenExpiredError } = jwt;

export const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res
      .status(401)
      .send({ message: "Unauthorized! Access Token was expired!" });
  }
  res.status(401).send({ message: "Unauthorized!" });
};

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  // const token = req.cookies.accessToken;
  if (!token)
    return res.status(401).send({
      message: "No token provided!",
    });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return catchError(err, res);
    req.id = decoded.id;
    req.nik = decoded.nik;
    req.email = decoded.email;
    req.roles_id = decoded.roles_id;
    next();
  });
};

export const isAdmin = (req, res, next) => {
  User.findOne({ where: { id: req.id } })
    .then((user) => {
      if (user.roles_id === 1) {
        next();
        return;
      }
      res.status(403).send({ message: "Require Admin Role!" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

export const isInterviewer = (req, res, next) => {
  User.findOne({ where: { id: req.id } })
    .then((user) => {
      if (user.roles_id === 1 || user.roles_id === 2) {
        next();
        return;
      }
      res.status(403).send({ message: "Require Interviewer Role!" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

export const isApplicant = (req, res, next) => {
  User.findOne({ where: { id: req.id } })
    .then((user) => {
      if (user.roles_id === 1 || user.roles_id === 3) {
        next();
        return;
      }
      res.status(403).send({ message: "Require User Role!" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

export const isAllRoles = (req, res, next) => {
  User.findOne({ where: { id: req.id } })
    .then((user) => {
      if (user.roles_id === 1 || user.roles_id === 2 || user.roles_id === 3) {
        next();
        return;
      }
      res.status(403).send({ message: "Require Role!" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

export const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isInterviewer: isInterviewer,
  isApplicant: isApplicant,
  isAllRoles: isAllRoles,
};

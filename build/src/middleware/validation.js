import User from "../models/user.model.js";

export const checkDuplicateNikandEmail = (req, res, next) => {
  User.findOne({
    where: {
      nik: req.body.nik,
    },
  }).then((nik) => {
    if (nik) {
      return res.status(400).send({
        message: "Failed, nik is already in use!",
      });
    }
    // Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        return res.status(400).send({
          message: "Email is already in use!",
        });
      }
      next();
    });
  });
};

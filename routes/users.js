let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let userList = require('../models/users');

/* GET Route for the Service List page - READ OPeration */
router.post('/login', (req, res, next) => {
  // userList.findOne({
  //   username: req.body.username
  // }).exec((err, user) => {
  //   if (err) {
  //     res.status(500).send({ message: err });
  //     return;
  //   }

  //   if (user) {
  //     res.status(400).send({ message: "Failed! Username is already in use!" });
  //     return;
  //   }
  // });
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});


module.exports = router;


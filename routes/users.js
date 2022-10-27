let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

router.get('/', (req, res, next) => {
  console.log("User page")
});


module.exports = router;


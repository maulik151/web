let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { update } = require('../models/bussinesslist');

// create a reference to the model
let User = require('../models/users');

module.exports.userCheck = (req, res, next) => {
    console.log("=====check user called===")
    let id = req.params.id;

    User.findById(id, (err, users) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            console.log("====contact users", users)
            res.render('login', {title: 'Check user', users: users})
        }
    });
}
let mongoose = require('mongoose');

// create a model class
let bussinessContactModel = mongoose.Schema({
    contactName: String,
    contactNumber: String,
    emailAddress: String
},
{
    collection: "businessContactList"
});

module.exports = mongoose.model('BusinessContactList', bussinessContactModel);
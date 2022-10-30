let mongoose = require('mongoose');

// create a model class
let bussinessContactModel = mongoose.Schema({
    contactName: String,
    contactAddress: String,
    emailAddress: String
},
{
    collection: "businessContactList"
});

module.exports = mongoose.model('BusinessContactList', bussinessContactModel);
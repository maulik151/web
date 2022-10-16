let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { update } = require('../models/bussinesslist');

// create a reference to the model
let Contactlist = require('../models/bussinesslist');

module.exports.displayContactList = (req, res, next) => {
    Contactlist.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(contactList);

            res.render('contact/list', {title: 'Bussiness Contacts List', ContactList: contactList});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'})          
}

module.exports.processAddPage = (req, res, next) => {
    console.log("====processAddPage")
    let newContact = Contactlist({
        "contactName": req.body.contactName,
        "contactAddress": req.body.contactAddress,
        "emailAddress": req.body.emailAddress
    });
    console.log("=====add contact===", req.body)
    Contactlist.create(newContact, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contactlist.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            console.log("====contact edit", contactToEdit)
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contactlist({
        "_id": id,
        "contactName": req.body.contactName,
        "contactAddress": req.body.contactAddress,
        "emailAddress": req.body.emailAddress
    });
    console.log("===updated contact list====", updatedContact)
    Contactlist.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log("====update edit record", updatedContact)
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contactlist.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/contact-list');
        }
    });
}
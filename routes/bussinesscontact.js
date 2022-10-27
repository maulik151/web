let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let bussinessContactController = require('../controllers/contactlist');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the bussiness contact List page - READ Operation */
router.get('/', bussinessContactController.displayContactList);

/* GET Route for displaying the Add bussiness contact page - CREATE Operation */
router.get('/add', requireAuth, bussinessContactController.displayAddPage);

/* POST Route for adding the contact to database - CREATE Operation */
router.post('/add', requireAuth, bussinessContactController.processAddPage);

/* GET Route for displaying the Edit bussiness contact page - UPDATE Operation */
router.get('/edit/:id', requireAuth, bussinessContactController.displayEditPage);

/* POST Route for updating the contact to the database - UPDATE Operation */
router.post('/edit/:id', requireAuth, bussinessContactController.processEditPage);

/* GET Route for deleting the contact for database - DELETE Operation */
router.get('/delete/:id', requireAuth, bussinessContactController.performDelete);

module.exports = router;
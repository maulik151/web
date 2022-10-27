// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('home', { title: 'Home'});
// });

// /* GET home page. */
// router.get('/home', function(req, res, next) {
//   res.render('home', { title: 'Home'});
// });

// /* GET About Us page. */
// router.get('/about', function(req, res, next) {
//   res.render('aboutme', { title: 'About'});
// });

// /* GET Products page. */
// router.get('/products', function(req, res, next) {
//   res.render('product', { title: 'Products'});
// });

// /* GET Services page. */
// router.get('/services', function(req, res, next) {
//   res.render('service', { title: 'Services'});
// });

// /* GET Contact Us page. */
// router.get('/contact', function(req, res, next) {
//   res.render('contact', { title: 'Contact'});
// });

// module.exports = router;


let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/products', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;

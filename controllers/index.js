let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('home', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('aboutme', { title: 'About'});
}

module.exports.displayProductsPage = (req, res, next) => {
    res.render('product', { title: 'Products'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('serviceDetail', { title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact'});
}
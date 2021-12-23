var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId; 

var usuario = require('../models/Usuarios');

/* GET home page. */
router.get('/signup', (req, res) => {
    res.render('signup', {type: "Signup"});
});

router.post('/signup/save', (req, res) => {
    const signup = usuario(req.body);
    signup.save().catch((error) => res.json({ message: error }));
    res.redirect('/entry/login');      
});

router.get('/login', (req, res) => {
    res.render('login', {type: "Log in"});
});

router.get('/login-consult', (req, res) => {
    res.redirect('/');
});
module.exports = router;
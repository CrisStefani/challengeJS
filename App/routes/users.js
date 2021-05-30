var express = require('express');
var router = express.Router();
const usersController = require('../controllers/UsersController');
const fs = require('fs');


/* GET users listing. */
router.get('/login', usersController.login);


router.get('/register', usersController.register);

module.exports = router;

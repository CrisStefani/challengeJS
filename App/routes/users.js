var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const { body, check } = require('express-validator');



const validateLogin = [
    body('email').isEmail().withMessage('Debes completar el campo con tu E-Mail'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña')
];
/* GET users listing. */
router.get('/login', usersController.login);
router.post('/login',validateLogin, usersController.logon)


router.get('/register', usersController.register);
router.post('/register', usersController.create)

module.exports = router;

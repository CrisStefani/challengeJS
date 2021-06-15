var express = require('express');
var router = express.Router();
const operationsController = require('../controllers/operationsController');
const fs = require('fs');


/* GET users listing. */
router.get('/new', operationsController.new);
router.post('/new', operationsController.create);




module.exports = router;
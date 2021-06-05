var express = require('express');
var router = express.Router();
const operationsController = require('../controllers/OperationsController');
const fs = require('fs');


/* GET users listing. */
router.get('/new', operationsController.new);




module.exports = router;
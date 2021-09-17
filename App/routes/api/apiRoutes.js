const express = require('express');
const router = express.Router();

const apiController = require("../../controllers/apiController");

router.get('/', apiController.list);
router.get('/:id', apiController.detail);


module.exports = router;
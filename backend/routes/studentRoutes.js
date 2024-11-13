const express = require('express');
const router = express.Router();
const { saveStudent } = require('../controller/studentController');

router.post('/',saveStudent);

module.exports = router;
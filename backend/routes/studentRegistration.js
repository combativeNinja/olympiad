const express = require('express');
const router = express.Router();
const { saveStudent } = require('../controller/studentRegister');

router.post('/',saveStudent);

module.exports = router;
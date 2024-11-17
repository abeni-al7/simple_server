// Routes for accessing name
const express = require('express');
const { getName } = require('../controllers/nameController');
const router = express.Router();

router.get('/name', getName);

module.exports = router;

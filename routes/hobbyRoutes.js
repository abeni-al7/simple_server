// Routes for hobby resources
const express = require('express');
const { getHobbies } = require('../controllers/hobbyController');
const router = express.Router();

router.get('/hobby', getHobbies);

module.exports = router;

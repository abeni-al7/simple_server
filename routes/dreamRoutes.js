// Routes for dream resources

const express = require('express');
const { getDream } = require('../controllers/dreamController');
const router = express.Router();

router.get('/dream', getDream);

module.exports = router;
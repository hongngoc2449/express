const express = require('express');
const router = express.Router();
const rectangleController = require('../controllers/rectangleController');

router.post('/calculate-perimeter', rectangleController.calculatePerimeter);

module.exports = router;
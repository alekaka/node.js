'use strict'// o javascript será mais criterioso ao analisar o código.

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;

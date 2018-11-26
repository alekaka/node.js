'use strict'// o javascript será mais criterioso ao analisar o código.

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/tags/:tag', controller.getByTag);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;
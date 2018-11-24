'use strict'// o javascript será mais criterioso ao analisar o código.

const express = require('express');
const router = express.Router();

// rota de teste de api
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    })
});

module.exports = router;
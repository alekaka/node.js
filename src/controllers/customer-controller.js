'use strict'// o javascript será mais criterioso ao analisar o código.

const repository = require('../repositories/customer-repository');

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({ 
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
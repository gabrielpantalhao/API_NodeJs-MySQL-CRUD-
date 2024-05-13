const express = require('express');
const router = express.Router();

const CarroCotroller = require('./controllers/CarroController');

router.get('/carros', CarroCotroller.buscarTodos);
router.get('/carro/:codigo', CarroCotroller.buscarUm);

module.exports = router; // exportando o modulo router para administrar as rotas


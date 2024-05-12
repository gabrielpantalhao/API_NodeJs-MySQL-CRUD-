const express = require('express');
const router = express.Router();

const CarroCotroller = require('./controllers/CarroController');

router.get('/carros', CarroCotroller.buscarTodos);

module.exports = router; // exportando o modulo router para administrar as rotas


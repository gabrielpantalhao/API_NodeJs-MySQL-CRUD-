// const { buscarTodos } = require('../controllers/CarroController');
const db = require('../db');

module.exports = {
    // funçao que realizará a busca através dq query SELECT no MySQL trazendo toda lista de carros cadastrados.
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros', (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};
const db = require('../db.js');

module.exports = {
    // função que realizará a busca através dq query SELECT no MySQL trazendo toda lista de carros cadastrados.
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros', (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    // função que realizará a busca através dq query SELECT no MySQL trazendo somente um resutado da lista dos carros cadastrados.
    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, results)=>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0) {
                    aceito(results[0]);
                }else {
                    aceito(false);
                } 
            });
        });
    }
};
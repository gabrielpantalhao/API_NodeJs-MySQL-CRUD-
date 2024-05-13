const CarroService = require('../services/CarroService');

module.exports = {
    // Função que irá realizar a chamada de buscar todos registros.
    buscarTodos: async (req, res) => {
        let json = {error: '', results:[]}; // variavel que amazenara erros ou arrays de resultados.

        let carros = await CarroService.buscarTodos(); // varivavel que aguarda retono da função do carroServices (busucarTodos) que busca dados do banco MySQL.

        // Loop que irá fazer a varedura dentro da variavel carros e trazer a informação do codigo e modelo.
        for(let i in carros) {
            json.results.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo,
                placa: carros[i].placa,
            });
        }
        res.json(json); // pega o resultado e passa para o formato JSON.
    },

    buscarUm: async (req, res) => {
        let json = {error: '', results:{}}; // variavel que amazenara erros ou arrays de resultados.

        let codigo = req.params.codigo;
        let carro = await CarroService.buscarUm(codigo);

        if(carro){
            json.results = carro;
        }
        res.json(json); // pega o resultado e passa para o formato JSON.
    }
};
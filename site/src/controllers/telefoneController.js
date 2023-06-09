var telefoneModel = require("../models/telefoneModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var fkUsuario = req.params.fkUsuario;
    var telefoneFinal = req.params.telefoneFinal;

    // Faça as validações dos valores
    if (telefoneFinal == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo telefoneModel.js
        telefoneModel.cadastrar(fkUsuario, telefoneFinal)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar

}
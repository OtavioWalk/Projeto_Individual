var graficoModel = require("../models/graficoModel");


function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

// function listar(req, res) {
//     graficoModel.listar()
//         .then(function (resultado) {
//             if (resultado.length > 0) {
//                 res.status(200).json(resultado);
//             } else {
//                 res.status(204).send("Nenhum resultado encontrado!")
//             }
//         }).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var fkUsuario = req.body.fkUsuarioServer;
    var grafico = req.body.graficoServer;

    // Faça as validações dos valores
    if (grafico == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo graficoModel.js
        graficoModel.cadastrar(idResultado, fkUsuario, resultado)
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
    cadastrar,
    testar,
}
var database = require("../database/config")

function cadastrar(fkUsuario, resultadoTeste) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    INSERT INTO Resultado (fkUsuario, resultado) VALUES ('${fkUsuario}', '${resultadoTeste}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function buscarUltimasMedidas(Resultado, Quantidade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT Resultado, COUNT(*) AS Quantidade FROM Resultado
    WHERE Resultado IN ('Aloy', 'Kratos', 'Deacon', 'Jim Sakai')
    GROUP BY Resultado;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}





module.exports = {
    cadastrar,
    buscarUltimasMedidas
};
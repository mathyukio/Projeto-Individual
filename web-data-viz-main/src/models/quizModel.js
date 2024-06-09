var database = require("../database/config")

const mysql = require('mysql2');

function mensagem(idUsuario, tentativa, acertos, erros) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mensagem():", idUsuario, tentativa, acertos, erros);

    var instrucaoSql = `
        INSERT INTO quiz (fkUsuario, tentativa, acertos, erros) VALUES ('${idUsuario}', '${tentativa}', '${acertos}', '${erros}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarQuiz(idUsuario, tentativa, acertos, erros) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario, tentativa, acertos, erros)
    var instrucao = `SELECT tentativa, erros, acertos
    FROM quiz
    JOIN usuario ON fkUsuario = idUsuario
    WHERE idUsuario =${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarQuiz(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario)
    var instrucaoSql = `SELECT idQuiz, acertos
    FROM quiz
    JOIN usuario ON fkUsuario = idUsuario
    WHERE idUsuario =${idUsuario}
    ORDER BY idQuiz;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mensagem,
    listarQuiz,
    buscarQuiz
};
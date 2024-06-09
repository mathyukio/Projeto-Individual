var quizModel = require("../models/quizModel");

function mensagem(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var tentativa = req.body.tentativaServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;

    // Log dos dados recebidos da requisição
    console.log("Dados recebidos do frontend:", idUsuario, tentativa, acertos, erros);

    quizModel.mensagem(idUsuario, tentativa, acertos, erros)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessageF
            );
            res.status(500).json(erro.sqlMessage);
        });
}

function listarQuiz(req, res) {
   
    var idUsuario = req.body.idUsuario;

    if (idUsuario === undefined) {
        res.status(400).send("O id do usuário está indefinido!");
        return;
    }
    quizModel.listarQuiz(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.error(erro);
                res.status(500).json({ error: "Erro ao listar as tentativas do usuário" });
            }
        );
}

function buscarQuiz(req, res) {
    
    var idUsuario = req.body.idUsuarioServer;
  
    quizModel.buscarQuiz(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
  }

module.exports = {
    mensagem,
    listarQuiz,
    buscarQuiz
};

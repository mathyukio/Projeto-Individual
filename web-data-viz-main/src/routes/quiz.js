var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/mensagem", function (req, res) {
    quizController.mensagem(req, res);
})  

router.post("/listarQuiz", function (req, res) {
    quizController.SelectQuiz(req, res);
});

router.get('/verificarTentativas/:idUsuario/:tipoQuiz', function (req, res) {
    quizController.verificarTentativas(req, res);
});

module.exports = router;
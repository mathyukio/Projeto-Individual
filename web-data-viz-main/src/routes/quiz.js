var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/mensagem", function (req, res) {
    quizController.mensagem(req, res);
})  

router.post("/listarQuiz", function (req, res) {
    quizController.SelectQuiz(req, res);
});

router.post("/buscarQuiz", function (req, res) {
    quizController.buscarQuiz(req, res);
});

module.exports = router;
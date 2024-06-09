var express = require("express");
var router = express.Router();

var postsController = require("../controllers/postsController");

router.get("/listar", function (req, res) {
    postsController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    postsController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    postsController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    postsController.publicar(req, res);
});

router.put("/editar/:idPosts", function (req, res) {
    postsController.editar(req, res);
});

router.delete("/deletar/:idPosts", function (req, res) {
    postsController.deletar(req, res);
});

module.exports = router;
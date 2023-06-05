var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    graficoController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    graficoController.listar(req, res);
});
module.exports = router;
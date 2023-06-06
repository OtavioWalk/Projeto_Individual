var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/", function (req, res) {
    graficoController.testar(req, res);
});


//Recebendo os dados do html e direcionando para a função cadastrar de graficoController.js
router.get("/cadastrar", function (req, res) {
    graficoController.cadastrar(req, res);
})



module.exports = router;
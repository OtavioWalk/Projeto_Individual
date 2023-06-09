var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/", function (req, res) {
    graficoController.testar(req, res);
});


//Recebendo os dados do html e direcionando para a função cadastrar de graficoController.js
router.post("/cadastrar/:fkUsuario/:resultadoTeste", function (req, res) {
    graficoController.cadastrar(req, res);
})













router.get("/buscarUltimasMedidas", function (req, res) {
   graficoController.buscarUltimasMedidas(req, res);
});




module.exports = router;
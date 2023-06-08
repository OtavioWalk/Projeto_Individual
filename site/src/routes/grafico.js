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



module.exports = router;





var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/buscarUltimasMedidas/:Resultado/:Quantidade", function (req, res) {
   graficoController.buscarUltimasMedidas(req, res);
});

// router.get("/tempo-real/:idAquario", function (req, res) {
//    graficoController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;
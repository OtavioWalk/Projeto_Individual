var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/", function (req, res) {
    graficoController.testar(req, res);
});


//Recebendo os dados do html e direcionando para a função cadastrar de graficoController.js
router.post("/cadastrar", function (req, res) {
    graficoController.cadastrar(req, res);
})



module.exports = router;











// var express = require("express");
// var router = express.Router();

// var medidaController = require("../controllers/medidaController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

// module.exports = router;
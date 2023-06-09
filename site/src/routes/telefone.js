var express = require("express");
var router = express.Router();

var telefoneController = require("../controllers/telefoneController");


//Recebendo os dados do html e direcionando para a função cadastrar de telefoneController.js
router.post("/cadastrar/:fkUsuario/:telefoneFinal", function (req, res) {
    telefoneController.cadastrar(req, res);
})



module.exports = router;
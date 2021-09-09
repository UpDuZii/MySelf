var express = require('express');
var router = express.Router();
var mNovLem = require("../models/lembModel");

/* Add one Lembrete */
router.post('/', async function (req, res, next) {
    let titulo = req.body.titulo;
    let dataHora = req.body.dataHora;
    let descricao = req.body.descricao;
    let cor = req.body.cor;
    let result = await mNovLem.saveLembrete(titulo, dataHora, descricao, cor);
    res.send(result);
});

module.exports = router;
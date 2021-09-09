var express = require('express');
var router = express.Router();
var mLembs = require("../models/lembModel");

/* Update one Lembrete */
router.post('/:id', async function (req, res, next) {
    let id = req.params.id;
    let titulo = req.body.titulo;
    let dataHora = req.body.dataHora;
    let descricao = req.body.descricao;
    let cor = req.body.cor;
    let result = await mLembs.updateLembrete(id, titulo, dataHora, descricao, cor);
    res.send(result);
});

module.exports = router;
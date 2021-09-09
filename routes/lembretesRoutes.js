var express = require('express');
var router = express.Router();
var mLembs = require("../models/lembModel");

/* Add one Lembrete */
router.post('/novLem', async function (req, res, next) {
   let titulo = req.body.titulo;
   let dataHora = req.body.dataHora;
   let descricao = req.body.descricao;
   let cor = req.body.cor;
   let result = await mLembs.saveLembrete(titulo, dataHora, descricao, cor);

   res.status(result.status).
      send(result.data);
});

/* Get all Lembretes */
router.get('/', async function (req, res, next) {
   let lembretes = await mLembs.getAllLembretes();
   res.status(lembretes.status).
      send(lembretes.data);
});

/* Get one Lembrete */
router.get('/editarLem/:id', async function (req, res, next) {
   let id = req.params.id;
   let lembrete = await mLembs.getLembrete(id);

   res.status(lembrete.status).
      send(lembrete.data);
});

/* Update one Lembrete */
router.post('/editarLem/updateLemb/:id', async function (req, res, next) {
   let titulo = req.body.titulo;
   let dataHora = req.body.dataHora;
   let descricao = req.body.descricao;
   let cor = req.body.cor;
   let id = req.params.id;
   let result = await mLembs.updateLembrete(titulo, dataHora, descricao, cor, id);

   res.status(result.status).
      send(result.data);
});

/* Delete one Lembrete */
router.get('/editarLem/deleteLemb/:id', async function (req, res, next) {
   let id = req.params.id;
   let lembrete = await mLembs.deleteLembrete(id);

   res.status(lembrete.status).
      send(lembrete.data);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var mLembs = require("../models/lembModel");

/* Get all Lembretes */
router.get('/', async function (req, res, next) {
   let lembs = await mLembs.getAllLembretes();
   res.send(lembs);
});

/* Get one Lembrete */
router.get('/:id_u', async function (req, res, next) {
   let id = req.params.id_u;
   let lembrete = await mLembs.getLembrete(id);
   res.send(lembrete);
});

module.exports = router;
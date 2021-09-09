var express = require('express');
var router = express.Router();
var mLembs = require("../models/lembModel");

/* Delete one Lembrete */
router.get('/:id', async function (req, res, next) {
    console.log("ola");

    let id = req.params.id;
    let lembrete = await mLembs.deleteLembrete(id);
    res.send(lembrete);
});

module.exports = router;
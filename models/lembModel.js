const { response } = require("express");
var pool = require("./connection");

module.exports.getAllLembretes = async function () {
    try {
        const sql = "SELECT id, titulo, dataHora, descricao, botao FROM  Lembretes";

        const lembretes = await pool.query(sql);
        console.log(sql);
        return lembretes;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports.saveLembrete = async function (titulo, dataHora, descricao, cor) {
    try {
        const sqlLembs = "INSERT INTO Lembretes (titulo, dataHora, descricao, botao) VALUES ('" + titulo + "','" + dataHora + "','" + descricao + "','" + cor + "') ";
        const lembretes = await pool.query(sqlLembs);
        return lembretes;

    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports.getLembrete = async function (id) {
    try {
        const sql = "SELECT id, titulo, dataHora, descricao, botao FROM Lembretes WHERE id = ?";
        const lembrete = await pool.query(sql, [id]);

        console.log(sql);
        return lembrete;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports.deleteLembrete = async function (id) {
    try {
        console.log("Delete with id " + id);
        const sql = "DELETE FROM Lembretes WHERE id = " + id + "";
        const lembrete = await pool.query(sql);

        console.log(sql);
        return lembrete;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports.updateLembrete = async function (id, titulo, dataHora, descricao, cor) {
    try {
        console.log("Delete with id " + id);
        const sql = "UPDATE Lembretes SET titulo = '" + titulo + "', dataHora = '" + dataHora + "', descricao = '" + descricao + "', botao = '" + cor + "' WHERE id = " + id + "";
        const lembrete = await pool.query(sql);

        console.log(sql);
        return lembrete;
    } catch (err) {
        console.log(err);
        return err;
    }
}
const { response } = require("express");
var pool = require("./connection");

module.exports.getAllLembretes = async function () {
    try {
        const sql = "SELECT id, titulo, dataHora, descricao, botao FROM  Lembretes";
        const lembretes = await pool.query(sql);
        console.log(sql);
        return {status:200, data: lembretes};

    } catch (err) {
        console.log(err);
        return {status:500, data: err};
    }
}

module.exports.saveLembrete = async function (titulo, dataHora, descricao, cor) {
    try {
        const sql = "INSERT INTO Lembretes (titulo, dataHora, descricao, botao) VALUES (?,?,?,?)";
        const lembrete = await pool.query(sql, [titulo, dataHora, descricao, cor]);
        console.log(sql);
        return {status:200, data: lembrete};

    } catch (err) {
        console.log(err);
        return {status:500, data: err};
    }
}

module.exports.getLembrete = async function (id) {
    try {
        const sql = "SELECT id, titulo, dataHora, descricao, botao FROM Lembretes WHERE id = ?";
        const lembrete = await pool.query(sql, [id]);
        console.log(sql);
        return {status:200, data: lembrete};

    } catch (err) {
        console.log(err);
        return {status:500, data: err};
    }
}

module.exports.deleteLembrete = async function (id) {
    try {
        const sql = "DELETE FROM Lembretes WHERE id = ?";
        const lembrete = await pool.query(sql, [id]);
        console.log(sql);
        return {status:200, data: lembrete};

    } catch (err) {
        console.log(err);
        return {status:500, data: err};
    }
}

module.exports.updateLembrete = async function (titulo, dataHora, descricao, cor, id) {
    try {
        const sql = "UPDATE Lembretes SET titulo = ?, dataHora = ?, descricao = ?, botao = ? WHERE id = ?";
        const lembrete = await pool.query(sql, [titulo, dataHora, descricao, cor, id]);
        console.log(sql);
        return {status:200, data: lembrete};

    } catch (err) {
        console.log(err);
        return {status:500, data: err};
    }
}
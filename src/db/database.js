const { Sequelize } = require("sequelize");

const db = new Sequelize("db_sequelize", "root", "",
{ host: "localhost", port:"33065", dialect:"mysql"});

module.exports = db;
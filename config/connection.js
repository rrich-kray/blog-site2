const path = require("path");
const Sequelize = require("sequelize");
const config = require(__dirname + "./config.js");

require("dotenv").config();

const sequelize = process.env.JAWS_DB
  ? new Sequelize(process.env.JAWS_DB)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;

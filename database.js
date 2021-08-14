const Sequelize = require("sequelize");
const {DataBase,Config} = require('./CONST')

const sequelize = new Sequelize(Config.db,Config.loginDb, Config.passDb, {
  dialect: DataBase.dialect,
  host: DataBase.host
});



  

module.exports = sequelize;
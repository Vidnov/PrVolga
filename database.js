const Sequelize = require("sequelize");
const {DataBase,Config,Message} = require('./CONST')

const sequelize = new Sequelize(Config.db,Config.loginDb, Config.passDb, {
  dialect: DataBase.dialect,
  host: DataBase.host,
  define: {
    timestamps: false
}});

try {
  // sequelize.sync() Функция синхронизирует модели с бд если отсутствуют миграции 
} catch (error) {
  console.log(Message.eSync);
}

  

module.exports = sequelize;
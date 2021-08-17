const Config = require("./config/config.json")
module.exports.DataBase ={
    dialect:Config.development.dialect,
    host:Config.development.host
    
}
module.exports.Config ={
    db:Config.development.database,
    loginDb:Config.development.username,
    passDb:Config.development.password
   }

   module.exports.Message ={
    userDelite:"Пользователь удален",
    dbConnected:"База данных подключена",
    dbError:"Ошибка подключения БД",
    eSync:"Ошибка Синхронизации"
   }

   module.exports.Status ={
   reqComplite:200,
   reqError:404
   }

   module.exports.Url ={
    main:'/'  ,
    byId:"/:id"
    }






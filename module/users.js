const Sequelize = require('sequelize');
const db = require('../database');
const users = db.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
         unique: 'actions_unique',

    },
    mail: {
        type: Sequelize.STRING,
         allowNull: false,
        unique: 'actions_unique',

    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,

    }
},
{
    indexes: [
        {
            unique: true,
            fields: ['mail']
        }
    ]
})

try {
    console.log("Успешаная синхронизация с БД")
} catch (error) {
    console.log("Ошибка синхронизации",error)
}



module.exports = users;

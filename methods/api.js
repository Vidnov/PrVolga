var express = require('express');

const { Message, Status } = require('../CONST.js')

module.exports.UsersModule = {
    FindAllUsers: function (Model, req, res, next) {
        Model.findAll()
            .then(user => {
                res.status(Status.reqComplite).send(user)
            })
            .catch(e => {
                res.status(Status.reqError).send(e)
            })

    },
    CreateUser: function (Model, req, res, next) {
        const { name, mail, age } = req.body
        Model.create({
            name: name,
            mail: mail,
            age: age
        }).then(user => {

            res.status(Status.reqComplite).send(user)
        })
            .catch(e => res.status(Status.reqError).send(e))
    },
    FindUserById: function (Model, req, res, next) {
        const { id } = req.params

        Model.findByPk(id).then(user => {
            res.status(Status.reqComplite).send(user)
        })
            .catch(e => res.status(Status.reqError).send(e))
    },
    UpdateUser: function (Model, req, res, next) {
        const { name, mail, age } = req.body
        const { id } = req.params
        console.log(id, name, mail)
        Model.update(
            { name: name, mail: mail, age: age }, { where: { id: id } }
        ).then(user => {

            res.status(Status.reqComplite).send(user)
        })
            .catch(e => res.status(Status.reqError).send(e))
    },
    DeliteUser: function (Model, req, res, next) {
        const { id } = req.params
        Model.destroy({ where: { id: id } }).then(user => {

            res.status(Status.reqComplite).send(Message.userDelite)
        })
            .catch(e => res.status(Status.reqError).send(e))
    }

}
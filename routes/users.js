var express = require('express');
var router = express.Router();
const Users = require('../models/users')
const {Url } = require('../CONST.js')
const { UsersModule } = require('../methods/api.js')



router.get(Url.main, function (req, res, next) {

  UsersModule.FindAllUsers(Users,req, res, next);

})

router.post(Url.main, function (req, res, next) {
  UsersModule.CreateUser(Users,req, res, next);
});

router.get(Url.byId, function (req, res, next) {
  UsersModule.FindUserById(Users,req, res, next);
});

router.put(Url.byId, function (req, res, next) {
  UsersModule.UpdateUser(Users,req, res, next);
});

router.delete(Url.byId, function (req, res, next) {

  UsersModule.DeliteUser(Users,req, res, next);
});


module.exports = router;


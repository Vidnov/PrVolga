var express = require('express');
const Users = require('../module/users')
var router = express.Router();
const {User} = require('../methods/api');

/* GET home page. */



router.get('/', function (req, res, next) {
  res.status(200).send('ok')
});



module.exports = router;

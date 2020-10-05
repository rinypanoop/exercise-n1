var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'An exercise using Node, Express.Postgres and Heroku' });
});

module.exports = router;

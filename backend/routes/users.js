var express = require('express');
var router = express.Router();

const users = [{name: "Someone", email: "someone@example.com"}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  users.push(req.body);
  res.send(200);
});

module.exports = router;

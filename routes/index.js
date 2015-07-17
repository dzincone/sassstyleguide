var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});

router.get('/styleguide', function(req, res, next) {
  res.render("portfolio/styleguide");
})

module.exports = router;

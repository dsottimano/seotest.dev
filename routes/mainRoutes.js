var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SEO Testing Ground Homepage' ,responseHeaders: JSON.stringify(req.headers)});
});

router.get('/n', function(req, res, next) {
  res.render('new', { title: 'SEO Testing Ground Homepage' ,responseHeaders: JSON.stringify(req.headers)});
});

module.exports = router;

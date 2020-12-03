var express = require('express');
const verify = require('googlebot-verify');
var router = express.Router();


router.get('/301', (req, res) => {
res.status(301).send("301")

})

var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require("path")

router.get("/redirect", async (req,res)=>{
    let protocol = req.query.protocol + "://" || "https://";
    let subdomain = req.query.subdomain || "";
    let hostname = req.query.hostname || "";;
    let path = req.query.path || "";
    let urlString = protocol + subdomain + hostname + path;
    //res.send(urlString)
    res.redirect(301,urlString)
  
  })
  
  module.exports = router;
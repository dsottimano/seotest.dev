var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.render('index', {
    title: 'Live SEO Testing Ground - Seotest.dev',
    metaDescription : "A collection of live tests for SEO professionals to use for training, educational, or verification purposes.",
    responseHeaders: JSON.stringify(req.headers),
    canonical_1_name: "",
    canonical_1_value: "",
    canonical_2_name: "",
    canonical_2_value: "",
    robots_1_name : "",
    robots_1_value : "",
    robots_2_name : "",
    robots_2_value : "",
    pageTopHeading: "SEOtest.dev is a collection of live SEO tests for training and educational purposes",
    pageSubHeading: "Check out the test categories below to get started",
    testName : "Why does this exist?",
    bodyDescription: `<p>This site was designed for those who are developing SEO tools or are curious to see how Googlebot behaves with specific configurations.  Think of it
    as a live test so that you can see how various configurations behave in the wild.<p>

    <p>For now this is a work in progress and in the near future I will work towards exposing as much information as possible</p>

    <h3>How the site works </h3>
    <p>Written in Node JS and powered by the Express JS framework. No CMS! You can see the code <a href="https://github.com/dsottimano/seotest.dev">here</a></p>
    <p>Feel free to give me additional suggestions at dsottimano@gmail.com</p> 

    <p>You'll notice two sections that appear on each page, Google Links (to check against the live index or cache) and a Request Headers table (which is YOUR information sent to me in HTTP headers)
    
    `,
    googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
    ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    headers: req.headers
  });
});

router.get('/about', function (req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.render('about');
});

function changeRobotsValue(req,res,next) {
  console.log("yo",req.url)
  if(req.url.includes("cloaking/mobile-cloak")) res.send ("Disallow: /")
  next()
}


router.get("/robots.txt",changeRobotsValue, (req,res)=>{
  console.log(req.url,"yoyoyooy")
  if (req.url = "cloaking/mobile-cloak" && req.headers['user-agent'].includes("Nexus 5X Build")) {
  
    return res.send("Disallow : /") 
   } 
   return res.send("Disallow:")
})

module.exports = router;
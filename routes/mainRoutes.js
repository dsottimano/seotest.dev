var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require("path")

router.get('/token', async (req, res) => {
  const {
    GoogleToken
  } = require('gtoken');
  const gtoken = new GoogleToken({
    keyFile: path.join(__dirname + '/../service.json'), // or path to .p12 key file
    email: 'seotest-dev@project-id-8178436313711074464.iam.gserviceaccount.com',
    scope: ['https://www.googleapis.com/auth/analytics.readonly'] // or space-delimited string of scopes
  });

  gtoken.getToken((err, tokens) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(tokens);
   
  });
});

function getLogs(urlRequested) {
  return new Promise(function (resolve, reject) {
    let data = fs.readFileSync(path.resolve(__dirname, "../logs/info.log"), 'utf8')
    let parsedData = data.split('\n')
    let jsonData = [];
    let logData = [];

    try {
      for (let i = 0; i < parsedData.length; i++) {
        jsonData.push(JSON.parse(parsedData[i]))
      }

    } catch (e) {
      //console.error(e)
    }

    for (let y = 0; y < jsonData.length; y++) {
      if (jsonData[y].url == urlRequested) {
        logData.push(jsonData[y])
      }
    }
    resolve(logData);
  })
}

router.get('/logs', async (req, res) => {
  console.log("query", req.query.queryUrl)
  const result = getLogs(req.query.queryUrl).then(d => {
      res.send(d)
    })
    .catch(e => res.send(e))

});


/* GET home page. */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.render('index', {
    title: 'Live SEO Testing Ground - Seotest.dev',
    metaDescription: "A collection of live tests for SEO professionals to use for training, educational, or verification purposes.",
    responseHeaders: JSON.stringify(req.headers),
    canonical_1_name: "",
    canonical_1_value: "",
    canonical_2_name: "",
    canonical_2_value: "",
    robots_1_name: "",
    robots_1_value: "",
    robots_2_name: "",
    robots_2_value: "",
    pageTopHeading: "SEOtest.dev is a collection of live SEO tests for training and educational purposes",
    pageSubHeading: "Check out the test categories below to get started",
    testName: "Why does this exist?",
    bodyDescription: `<p>This site was designed for those who are developing SEO tools or are curious to see how Googlebot behaves with specific configurations.  Think of it
    as a live test so that you can see how various configurations behave in the wild.<p>
    <p>For now this is a work in progress and in the near future I will work towards exposing as much information as possible</p>
    
    <h3 class="font-weight-bold">How the site works </h3>
    <hr/>
    <p>Written in Node JS and powered by the Express JS framework. No CMS! You can see the code <a href="https://github.com/dsottimano/seotest.dev">here</a>.
    Feel free to give me additional suggestions at dsottimano@gmail.com</p> 
    <p>You'll notice four sections that appear on each page, Google Link (to check against the live index) and a Request Headers table (which is YOUR information sent to me in HTTP headers), live Googlebot verified requests and GA data for each page
    `,
    googleIndex: 'https://' + req.get('host') + req.originalUrl,
    ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    headers: req.headers
  });
});

router.get('/about', function (req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.render('about');
});




router.get("/robots.txt", (req, res) => {
  res.setHeader('Content-type', 'text/plain');
  return res.send(`
  User-agent: *
  Disallow: 
  
  `)
})

module.exports = router;
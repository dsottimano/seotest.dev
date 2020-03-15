var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'SEO Testing Ground Homepage',
    responseHeaders: JSON.stringify(req.headers),
    headConfig: "<link rel='canonical' href='hello'>",
    pageHeading: "SEO Testing Ground",
    pageSubheading: "A very badly designed site for you to test SEO tools against by David Sottimano",
    testName : "How this site works",
    mainContent: `<p>This site was designed for those who are developing SEO tools or are curious to see how Googlebot behaves with specific configurations.  Think of it
    as a live test so that you can see how various configurations behave in the wild.<p>

    <p>For now this is a work in progress and in the near future I will work towards exposing as much information as possible</p>

    <h2>About this site</h2>
    <p>Written in pure Node JS and powered by the Express JS framework. No CMS! You can see the codebase <a href="https://github.com/dsottimano/seotest.dev">here</a></p>
    
    
    
    `
  });
});



module.exports = router;
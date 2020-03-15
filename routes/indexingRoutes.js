var express = require('express');
var router = express.Router();

router.get('/indexing', function (req, res, next) {
  res.render('index', {
    title: 'Indexing Tests - Seotest.dev',
    responseHeaders: JSON.stringify(req.headers),
    canonical_1_name: "",
    canonical_1_value: "",
    canonical_2_name: "",
    canonical_2_value: "",
    robots_1_name : "",
    robots_1_value : "",
    robots_2_name : "",
    robots_2_value : "",
    pageHeading: "Indexing Tests",
    pageSubheading: "This section is about search engine indexing testing",
    testName : "Available tests",
    bodyDescription: `
    <ul>
    <li><a href="/indexing/noindex-and-self-canonical">Noindex + Self referencing canonical tag<a></li>
    <li><a href="/indexing/double-noindex">Double noindex tags</a></li>

    
    </ul>
    `,
    googleIndex : () => req.protocol + '://' + req.get('host') + req.originalUrl,
    ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    headers: req.headers
  });
});

router.get('/indexing/noindex-and-self-canonical', function (req, res, next) {
  res.render('index', {
    title: 'Noindex + Self Canonical - Seotest.dev',
    responseHeaders: JSON.stringify(req.headers),
    canonical_1_name: "canonical",
    canonical_1_value: "http://seotest.dev/indexing/noindex-and-self-canonical",
    canonical_2_name: "",
    canonical_2_value: "",
    robots_1_name : "robots",
    robots_1_value : "noindex",
    robots_2_name : "",
    robots_2_value : "",
    pageHeading: "Indexing Tests",
    pageSubheading: "Noindex + self referencing canonical",
    testName : "About this test",
    bodyDescription: `
    <p>This page has a noindex directive and a self referencing canonical tag</p>
    <p>The canonical tag appears before the noindex tag</p>
    `,
    googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
    ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    headers: req.headers
  });
});


router.get('/indexing/double-noindex', function (req, res, next) {
    res.render('index', {
      title: 'Double Noindex Tag Test - Seotest.dev',
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "",
      canonical_1_value: "",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name : "robots",
      robots_1_value : "noindex",
      robots_2_name : "robots",
      robots_2_value : "noindex",
      pageHeading: "Indexing Tests",
      pageSubheading: "Double Noindex tags",
      testName : "About this test",
      bodyDescription: `
      <p>This page has 2 noindex tags which are identical</p>
      `,
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

module.exports = router;
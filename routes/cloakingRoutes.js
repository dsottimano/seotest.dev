var express = require('express');
var router = express.Router();

router.get('/cloaking', (req,res) =>{

  res.render('index', {
    title: 'Indexing Tests - Seotest.dev',
    metaDescription : "",
    responseHeaders: JSON.stringify(req.headers),
    canonical_1_name: "",
    canonical_1_value: "",
    canonical_2_name: "",
    canonical_2_value: "",
    robots_1_name : "",
    robots_1_value : "",
    robots_2_name : "",
    robots_2_value : "",
    pageSubHeading: "Indexing Tests",
    pageTopHeading: "This section is about search engine indexing testing",
    testName : "Available tests",
    bodyDescription: `
    <h4>Directives based tests</h4>
    <ul>
    <li><a href="/googlebot-302">Googlebot gets redirected via 302 to Homepage</a></li>
    <li><a href="/cloaking/googlebot-301">Googlebot gets redirected via 301 to Homepage</a></li>
    <li><a href="/cloaking/googlebot-307">Googlebot gets redirected via 307 to Homepage</a></li>
    <li><a href="/cloaking/googlebot-404">Googlebot gets a 404</a></li>
    </ul>
    `,


    googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
    ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    headers: req.headers
  });
})


router.get('/cloaking/googlebot-302', function (req, res, next) {
    if (req.headers['user-agent'].includes("Googlebot")) {
        return res.redirect(302, 'https://seotest.dev')
    } 
    res.render('index', {
      title: 'Googlebot gets redirected via 302 to Homepage - Seotest.dev',
      metaDescription : "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "",
      canonical_1_value: "",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name : "",
      robots_1_value : "",
      robots_2_name : "",
      robots_2_value : "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Googlebot gets redirected via 302 to Homepage",
      testName : "About this test",
      bodyDescription: `
      <p>If this page is requested by a Googlebot user-agent, it will automatically 302 to the homepage</p>
      <p>Otherwise, any other user-agent will be allowed to access this page.  Google should show this URL in search results but the snippet should be from the homepage</p>
      <p> A Google search for this exact URL may be returned, but it is a false positive</p>
      `,
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

  router.get('/cloaking/googlebot-301', function (req, res, next) {
    if (req.headers['user-agent'].includes("Googlebot")) {
        return res.redirect(301, 'https://seotest.dev')
    } 
    res.render('index', {
      title: 'Googlebot gets redirected via 301 to Homepage - Seotest.dev',
      metaDescription : "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "",
      canonical_1_value: "",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name : "",
      robots_1_value : "",
      robots_2_name : "",
      robots_2_value : "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Googlebot gets redirected via 301 to Homepage",
      testName : "About this test",
      bodyDescription: `
      <p>If this page is requested by a Googlebot user-agent, it will automatically 301 to the homepage</p>
      <p>Otherwise, any other user-agent will be allowed to access this page.</p>
      `,
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

  router.get('/cloaking/googlebot-307', function (req, res, next) {
    if (req.headers['user-agent'].includes("Googlebot")) {
        return res.redirect(307, 'https://seotest.dev')
    } 
    res.render('index', {
      title: 'Googlebot gets redirected via 307 to Homepage - Seotest.dev',
      metaDescription : "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "",
      canonical_1_value: "",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name : "",
      robots_1_value : "",
      robots_2_name : "",
      robots_2_value : "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Googlebot gets redirected via 307 to Homepage",
      testName : "About this test",
      bodyDescription: `
      <p>If this page is requested by a Googlebot user-agent, it will automatically 307 to the homepage</p>
      <p>Otherwise, any other user-agent will be allowed to access this page.</p>
      `,
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

  router.get('/cloaking/googlebot-404', function (req, res, next) {
    if (req.headers['user-agent'].includes("Googlebot")) {
        return res.send(404)
    } 
    res.render('index', {
      title: 'Googlebot gets a 404 - Seotest.dev',
      metaDescription : "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "",
      canonical_1_value: "",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name : "",
      robots_1_value : "",
      robots_2_name : "",
      robots_2_value : "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Googlebot gets 404 page",
      testName : "About this test",
      bodyDescription: `
      <p>If this page is requested by a Googlebot user-agent, the server will return a 404</p>
      <p>Otherwise, any other user-agent will be allowed to access this page.</p>
      `,
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

  router.get('/cloaking/mobile-cloak', function (req, res, next) {
    if (req.headers['user-agent'].includes("Nexus 5X Buildoglebot")) {
     req.block = "block"
     req.send("/whatever") 
    } 
    res.render('index', {
      title: 'Googlebot gets a 404 - Seotest.dev',
      metaDescription : "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "",
      canonical_1_value: "",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name : "",
      robots_1_value : "",
      robots_2_name : "",
      robots_2_value : "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Googlebot gets 404 page",
      testName : "About this test",
      bodyDescription: `
      <p>If this page is requested by a Googlebot user-agent, the server will return a 404</p>
      <p>Otherwise, any other user-agent will be allowed to access this page.</p>
      `,
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });
  module.exports = router;
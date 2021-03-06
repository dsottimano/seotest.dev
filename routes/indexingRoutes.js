var express = require('express');
var router = express.Router();
let utils = require('../utils')

router.get('/indexing', function (req, res, next) {
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
    pageTopHeading: "This section is about search engine indexing",
    testName : "Available tests",
    bodyDescription: `
    <h4>Meta Directives based tests</h4>
    <ul>
    <li><a href="/indexing/noindex-and-self-canonical">Noindex + Self referencing canonical tag<a></li>
    <li><a href="/indexing/noindex-and-canonical">Noindex + canonical to identical page<a></li>
    <li><a href="/indexing/double-noindex">Double noindex tags</a></li>
    <li><a href="/indexing/valid-canonical">Canonical to exact duplicate</a></li>
    </ul>
    <h4>HTTP Directives based tests</h4>
    <ul>
    <li><a href="/indexing/x-robots-noindex">http noindex, link to indexable page<a></li>
  
    </ul>
    
    <h4>Google Tag Manager Indexing tests</h4>
    <ul>
    <li><a href="/indexing/gtm-noindex">Injected meta noindex<a></li>
    <li><a href="/indexing/gtm-schema">Injected website schema<a></li>
    
    
    </ul>
    
    <h4>Redirect based tests</h4>
    
    <ul>
    <li><a href="/indexing/301">All users get redirected via 301 to Homepage</a></li>
    <li><a href="/indexing/302">All users get redirected via 302 to Homepage</a></li>
    <li><a href="/indexing/307">All users get redirected via 307 to Homepage</a></li>
    <li><a href="/indexing/404">All users get a 404</a></li>
    </ul>
    `,


    googleIndex : req.url,
    ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    headers: req.headers
  });
});

router.get('/indexing/noindex-and-self-canonical', function (req, res, next) {
  res.render('index', {
    title: 'Noindex + Self Canonical - Seotest.dev',
    metaDescription : "",
    responseHeaders: JSON.stringify(req.headers),
    canonical_1_name: "canonical",
    canonical_1_value: "http://seotest.dev/indexing/noindex-and-self-canonical",
    canonical_2_name: "",
    canonical_2_value: "",
    robots_1_name : "robots",
    robots_1_value : "noindex",
    robots_2_name : "",
    robots_2_value : "",
    pageSubHeading: "Indexing Tests",
    pageTopHeading: "Noindex + self referencing canonical",
    testName : "About this test",
    bodyDescription: `
    <p>This page has a noindex directive and a self referencing canonical tag</p>
    <p>The canonical tag appears before the noindex tag</p>
    `,
    googleIndex : 'https://' + req.get('host') + req.originalUrl,
    ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    headers: req.headers
  });
});

router.get('/indexing/noindex-and-canonical', function (req, res, next) {
    res.render('index', {
      title: 'Noindex + Canonical to new location - Seotest.dev',
      metaDescription : "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "canonical",
      canonical_1_value: "http://seotest.dev/indexing/noindex-and-canonical-target",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name : "robots",
      robots_1_value : "noindex",
      robots_2_name : "",
      robots_2_value : "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Noindex + Canonical to new location",
      testName : "About this test",
      bodyDescription: `
      <p>This page has a noindex directive and a canonical tag to an exact duplicate</p>
      <p>The canonical tag appears before the noindex tag</p>
      `,
      googleIndex : 'https://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

  router.get('/indexing/noindex-and-canonical-target', function (req, res, next) {
    res.render('index', {
      title: 'Noindex + Canonical to new location - Seotest.dev',
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
      pageTopHeading: "Noindex + Canonical to new location",
      testName : "About this test",
      bodyDescription: `
      <p>This page has a noindex directive and a canonical tag to an exact duplicate</p>
      <p>The canonical tag appears before the noindex tag</p>
      `,
      googleIndex : 'https://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

router.get('/indexing/double-noindex', function (req, res, next) {
    res.render('index', {
      title: 'Double Noindex Tag Test - Seotest.dev',
      metaDescription : "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "",
      canonical_1_value: "",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name : "robots",
      robots_1_value : "noindex",
      robots_2_name : "robots",
      robots_2_value : "noindex",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Double Noindex tags",
      testName : "About this test",
      bodyDescription: `
      <p>This page has 2 noindex tags which are identical</p>
      `,
      googleIndex : 'https://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

  router.get('/indexing/valid-canonical', function (req, res, next) {
    res.render('index', {
      title: 'Valid Canonical test- Seotest.dev',
      metaDescription : "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "canonical",
      canonical_1_value: "https://seotest.dev/indexing/valid-canonical-target",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name : "",
      robots_1_value : "",
      robots_2_name : "",
      robots_2_value : "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Valid canonical",
      testName : "About this test",
      bodyDescription: `
      <p>This page canonicals to an exact duplicate</p>
      `,
      googleIndex : 'https://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

  router.get('/indexing/valid-canonical-target', function (req, res, next) {
    res.render('index', {
      title: 'Valid Canonical test - Seotest.dev',
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
      pageTopHeading: "Valid canonical",
      testName : "About this test",
      bodyDescription: `
      <p>This page canonicals to an exact duplicate</p>
      `,
      googleIndex : 'https://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

  router.get('/indexing/canonical-to-non-duplicate', function (req, res, next) {
    res.render('index', {
      title: 'Canonical to non duplicate - Seotest.dev',
      metaDescription : "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "canonical",
      canonical_1_value: "https://seotest.dev/indexing",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name : "",
      robots_1_value : "",
      robots_2_name : "",
      robots_2_value : "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Valid canonical",
      testName : "About this test",
      bodyDescription: `
      <p>This page canonicals to an exact duplicate</p>
      `,
      googleIndex : 'https://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });


  router.get('/indexing/gtm-noindex', function (req, res, next) {
    res.render('index', {
      title: 'GTM Injected Noindex - Seotest.dev',
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
      pageSubHeading: "Indexing Tests: Google tag manager",
      pageTopHeading: "Google Tag Manager Injected Meta Noindex",
      testName : "About this test",
      bodyDescription: `
      <p>Google tag manager will inject a meta noindex into the head of this page</p>
      <p>If Google does manage to index the noindex tag, this page should not appear in search results</p>
      `,
      googleIndex : 'https://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

  router.get('/indexing/gtm-schema', function (req, res, next) {
    res.render('index', {
      title: 'GTM Injected schema - Seotest.dev',
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
      pageSubHeading: "Indexing Tests: Google tag manager schema injection",
      pageTopHeading: "Google Tag Manager Injected Schema",
      testName : "About this test",
      bodyDescription: `
      <p>Google tag manager will inject a a short schema block into the head of this page</p>
      <p>You can check if this works <a href="https://search.google.com/structured-data/testing-tool/u/0/#url=https%3A%2F%2Fseotest.dev%2Findexing%2Fgtm-schema">here</a></p>
      <p>The following text has been written using gpt-2</p>
      <p>SEO testing is essential  to protect our consumers and ensure a safe environment for all.  If  users are exposed to advice that is inherently incorrect, they should not be executing the actions advised.  If you are unsure as to how to evaluate information, please contact us for further assistance..</p>

      <p>If you have questions or concerns regarding the content of this post, please send an email to our Customer Service department and one of our team members will respond promptly.</p>
    
      `,
      googleIndex : 'https://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

  router.get('/indexing/x-robots-noindex', function (req, res, next) {
    res.set('X-Robots-Tag', 'noindex');
    res.render('index', {
      title: 'X robots noindex link to indexable page - Seotest.dev',
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
      pageSubHeading: "Indexing Tests: X robots noindex link to indexable page",
      pageTopHeading: "X robots noindex",
      testName : "About this test",
      bodyDescription: `
      <p>This page has an x robots noindex tag (http header)</p>
      <p>Will it crawl the following <a href="/indexing/x-robots-noindex-target">page</a> which is only linked to from this page?<p>
      <p>This test was inspired by this <a href="https://twitter.com/thetafferboy/status/1252366880079151104">tweet</a></p>
      
      `,
      googleIndex : 'https://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });

  router.get('/indexing/x-robots-noindex-target', function (req, res, next) {
    res.render('index', {
      title: 'Indexable page taget for x robots test- Seotest.dev',
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
      pageSubHeading: "Indexing Tests: Indexable page taget for x robots test",
      pageTopHeading: "X robots noindex link to indexable page",
      testName : "About this test",
      bodyDescription: `
      <p>Not much to see here this is just an indexable page</p>
      
      `,
      googleIndex : 'https://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });


  router.get('/indexing/302', function (req, res, next) {
    return res.redirect(302, 'https://seotest.dev')

});

router.get('/indexing/301', function (req, res, next) {

    return res.redirect(301, 'https://seotest.dev')
});

router.get('/indexing/307', function (req, res, next) {
    return res.redirect(307, 'https://seotest.dev')
});

router.get('/indexing/404', function (req, res, next) {
    return res.sendStatus(404)

});

module.exports = router;
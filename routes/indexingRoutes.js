var express = require('express');
var router = express.Router();

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
    pageTopHeading: "This section is about search engine indexing testing",
    testName : "Available tests",
    bodyDescription: `
    <h4>Directives based tests</h4>
    <ul>
    <li><a href="/indexing/noindex-and-self-canonical">Noindex + Self referencing canonical tag<a></li>
    <li><a href="/indexing/noindex-and-canonical">Noindex + canonical to identical page<a></li>
    <li><a href="/indexing/double-noindex">Double noindex tags</a></li>
    <li><a href="/indexing/valid-canonical">Canonical to exact duplicate</a></li>
    </ul>
    
    <h4>Google Tag Manager Indexing tests</h4>
    <ul>
    <li><a href="/indexing/gtm-noindex">Injected meta noindex<a></li>
    
    </ul>
    
    <h4>Redirect based tests</h4>
    
    <ul>
    <li><a href="/indexing/301">All users get redirected via 301 to Homepage</a></li>
    <li><a href="/indexing/302">All users get redirected via 302 to Homepage</a></li>
    <li><a href="/indexing/307">All users get redirected via 307 to Homepage</a></li>
    <li><a href="/indexing/404">All users get a 404</a></li>
    </ul>
    `,


    googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
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
    googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
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
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
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
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
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
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
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
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
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
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
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
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
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
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
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
      <p>The following text has been written using gpt-2</p>
      <p>SEO testing is essential  to protect our consumers and ensure a safe environment for all.  If  users are exposed to advice that is inherently incorrect, they should not be executing the actions advised.  If you are unsure as to how to evaluate information, please contact us for further assistance..</p>

      <p>If you have questions or concerns regarding the content of this post, please send an email to our Customer Service department and one of our team members will respond promptly.</p>
    
      `,
      googleIndex : req.protocol + '://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });




  
  // redirects

  router.get('/indexing/googlebot-302', function (req, res, next) {
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

  router.get('/indexing/googlebot-301', function (req, res, next) {
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

  router.get('/indexing/googlebot-307', function (req, res, next) {
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

  router.get('/indexing/googlebot-404', function (req, res, next) {
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
    return res.send(404)

});

module.exports = router;
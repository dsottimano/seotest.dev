var express = require('express');
const verify = require('googlebot-verify');
var router = express.Router();


router.get('/cloaking', (req, res) => {

  res.render('index', {
    title: 'cloaking tests - Seotest.dev',
    metaDescription: "",
    responseHeaders: JSON.stringify(req.headers),
    canonical_1_name: "",
    canonical_1_value: "",
    canonical_2_name: "",
    canonical_2_value: "",
    robots_1_name: "",
    robots_1_value: "",
    robots_2_name: "",
    robots_2_value: "",
    pageSubHeading: "Cloaking Tests",
    pageTopHeading: "This section is about cloaking for Googlebot",
    testName: "Available tests",
    bodyDescription: `
    <h4>Cloaking redirects</h4>
    <ul>
    <li><a href="/googlebot-302">Googlebot gets redirected via 302 to Homepage</a></li>
    <li><a href="/cloaking/googlebot-301">Googlebot gets redirected via 301 to Homepage</a></li>
    <li><a href="/cloaking/googlebot-307">Googlebot gets redirected via 307 to Homepage</a></li>
    </ul>
    <h4>Cloaking content tests</h4>
    <ul>
    <li><a href="/cloaking/google-only-cloak">Only Google can see the page - Google cloaking</a></li>
    </ul>
    `,


    googleIndex: req.protocol + '://' + req.get('host') + req.originalUrl,
    ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    headers: req.headers
  });
})


router.get('/cloaking/googlebot-302', function (req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  verify(ip, (error, isGoogle) => {
    if (isGoogle) {
      return res.redirect(302, 'https://seotest.dev')
    }
    res.render('index', {
      title: 'Googlebot gets redirected via 302 to Homepage - Seotest.dev',
      metaDescription: "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "",
      canonical_1_value: "",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name: "",
      robots_1_value: "",
      robots_2_name: "",
      robots_2_value: "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Googlebot gets redirected via 302 to Homepage",
      testName: "About this test",
      bodyDescription: `
      <p>If this page is requested by a Googlebot user-agent, it will automatically 302 to the homepage</p>
      <p>Otherwise, any other user-agent will be allowed to access this page.  Google should show this URL in search results but the snippet should be from the homepage</p>
      <p> A Google search for this exact URL may be returned, but it is a false positive</p>
      `,
      googleIndex: req.protocol + '://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });
});

router.get('/cloaking/googlebot-301', function (req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  verify(ip, (error, isGoogle) => {
    if (isGoogle) {
      return res.redirect(301, 'https://seotest.dev')
    }
    res.render('index', {
      title: 'Googlebot gets redirected via 301 to Homepage - Seotest.dev',
      metaDescription: "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "",
      canonical_1_value: "",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name: "",
      robots_1_value: "",
      robots_2_name: "",
      robots_2_value: "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Googlebot gets redirected via 301 to Homepage",
      testName: "About this test",
      bodyDescription: `
      <p>If this page is requested by a Googlebot user-agent, it will automatically 301 to the homepage</p>
      <p>Otherwise, any other user-agent will be allowed to access this page.</p>
      `,
      googleIndex: req.protocol + '://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });
});

router.get('/cloaking/googlebot-307', function (req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  verify(ip, (error, isGoogle) => {
    if (isGoogle) {
      return res.redirect(307, 'https://seotest.dev')
    }
    res.render('index', {
      title: 'Googlebot gets redirected via 307 to Homepage - Seotest.dev',
      metaDescription: "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "",
      canonical_1_value: "",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name: "",
      robots_1_value: "",
      robots_2_name: "",
      robots_2_value: "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Googlebot gets redirected via 307 to Homepage",
      testName: "About this test",
      bodyDescription: `
      <p>If this page is requested by a Googlebot user-agent, it will automatically 307 to the homepage</p>
      <p>Otherwise, any other user-agent will be allowed to access this page.</p>
      `,
      googleIndex: req.protocol + '://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });
});

router.get('/cloaking/googlebot-404', function (req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  verify(ip, (error, isGoogle) => {
    if (isGoogle) {
      return res.send(404)
    }
    res.render('index', {
      title: 'Googlebot gets a 404 - Seotest.dev',
      metaDescription: "",
      responseHeaders: JSON.stringify(req.headers),
      canonical_1_name: "",
      canonical_1_value: "",
      canonical_2_name: "",
      canonical_2_value: "",
      robots_1_name: "",
      robots_1_value: "",
      robots_2_name: "",
      robots_2_value: "",
      pageSubHeading: "Indexing Tests",
      pageTopHeading: "Googlebot gets 404 page",
      testName: "About this test",
      bodyDescription: `
      <p>If this page is requested by a Googlebot user-agent, the server will return a 404</p>
      <p>Otherwise, any other user-agent will be allowed to access this page.</p>
      `,
      googleIndex: req.protocol + '://' + req.get('host') + req.originalUrl,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      headers: req.headers
    });
  });
});

router.get('/cloaking/google-only-cloak', async function (req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  verify(ip, (error, isGoogle) => {
    if (isGoogle) {
      res.render('index', {
        title: 'Googlebot cloaking - Seotest.dev',
        metaDescription: "",
        responseHeaders: JSON.stringify(req.headers),
        canonical_1_name: "",
        canonical_1_value: "",
        canonical_2_name: "",
        canonical_2_value: "",
        robots_1_name: "",
        robots_1_value: "",
        robots_2_name: "",
        robots_2_value: "",
        pageSubHeading: "Cloaking Tests",
        pageTopHeading: "Google cloaking test",
        testName: "About this test",
        bodyDescription: `
      <p>You should not be able to see this page unless Google has cached the page</p>
      
      `,
        googleIndex: req.protocol + '://' + req.get('host') + req.originalUrl,
        ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        headers: req.headers
      })

    } else {
      res.sendStatus(401)
    }

  });
});
module.exports = router;
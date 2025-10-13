const functions = require('firebase-functions');

exports.handleRequests = functions.https.onRequest((req, res) => {
    const validRoutes = [
        '/',
        '/faqs',
        '/contact',
        '/locations',
        '/gallery',
        '/movie-nights-options',
        '/concessions-options',
        '/ice-cream-food-truck',
        '/mesa',
        '/scottsdale',
        '/tempe',
        '/phoenix',
        '/gilbert',
        '/chandler',
        '/paradise-valley',
        '/glendale',
        '/peoria',
        '/queen-creek',
        '/san-tan-valley',
        '/tolleson',
        '/buckeye',
        '/goodyear',
        '/anthem',
    ];

    if (!validRoutes.includes(req.path)) {
        res.status(404).send(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>404 Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body style="font-family:sans-serif;text-align:center;padding:50px;">
        <h1>404 - Page Not Found</h1>
        <p>This page does not exist. <a href="/">Go to Homepage</a></p>
      </body>
      </html>`);
    } else {
        res.redirect(302, '/index.html'); // Let Firebase Hosting handle SPA rendering
    }
});

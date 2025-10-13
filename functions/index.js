const functions = require('firebase-functions');

exports.handleRequests = functions.https.onRequest((req, res) => {
  try {
    // Define valid routes matching App.js
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

    // Normalize path by removing trailing slash
    const normalizedPath = req.path.replace(/\/$/, '') || '/';
    
    // Log request for debugging
    functions.logger.info(`Received request for: ${req.path}`, { structuredData: true });

    // Check if the path is valid
    if (!validRoutes.includes(normalizedPath)) {
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
      return;
    }

    // Redirect to index.html for SPA rendering
    res.redirect(302, '/index.html');
  } catch (error) {
    // Log errors and return a 500 response
    functions.logger.error('Error handling request:', error, { structuredData: true });
    res.status(500).send(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>500 Internal Server Error</title>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body style="font-family:sans-serif;text-align:center;padding:50px;">
        <h1>500 - Internal Server Error</h1>
        <p>Something went wrong. Please try again later.</p>
      </body>
      </html>`);
  }
});
# Project Services Documentation

This document provides an overview of the external services integrated into the application, including their purposes and relevant URLs.

## 1. Prerender.io

**Purpose:** Prerender.io is utilized to enhance SEO for my JavaScript-rendered website by serving pre-rendered pages to search engine bots, ensuring efficient crawling and indexing.

**Notes:**
- **Mobile Rendering Disabled:** Mobile rendering has been turned off to streamline the caching process and maintain consistent SEO evaluations across devices.
- **Free Tier Utilization:** Currently utilizing Prerender.io's free tier, which allows for up to 1,000 renders per month.  
**URL:** [https://prerender.io/](https://prerender.io/)

## 2. Firebase Hosting

**Purpose**  
Firebase Hosting is used to deploy and serve the frontend React application over HTTPS. It provides a secure, fast, and scalable way to serve static content with SPA routing support.

**Key Features**
- **Static Hosting**: Deployed from the `build/` directory using `npm run build`.
- **Custom Domain**: Live at [https://outdoormoviepros.com](https://outdoormoviepros.com), with Firebase-managed SSL.
- **SPA Rewrites**: Configured in `firebase.json` for clean routing of React routes.
- **Prerender.io Integration**: Adds the `X-Prerender-Token` header to support SEO-friendly rendering for bots and crawlers.
- **Cache Control**: Includes long-lived caching for static assets and customized headers for performance tuning.

**Configuration**
- `firebase.json`: Rewrites, redirects, headers, and hosting behavior.
- `.firebaserc`: Firebase project alias (`chinook-water-testing`).

---

## 3. Firebase Functions

**Purpose**  
Firebase Cloud Functions are used to handle backend logic, specifically the integration with Prerender.io to serve pre-rendered HTML for crawlers like Googlebot.

**Key Features**
- **Deployed Function**: A Node.js function is deployed alongside the hosting configuration to handle bot detection and prerender responses.
- **Integrated with Hosting**: Firebase Hosting rewrites certain requests to this function when crawler headers are detected.
- **Supports SEO**: Ensures dynamic routes are fully indexable by search engines via pre-rendering.

**Deployment**
- Functions are located in the `functions/` directory with their own `package.json` and `index.js`.
- Deploy using:
  ```bash
  firebase deploy --only hosting,functions


**URL:** [https://firebase.google.com/products/hosting](https://firebase.google.com/products/hosting)

## 4. EmailJS

**Purpose:** EmailJS enables the sending of emails directly from client-side code without requiring server-side integration, facilitating seamless communication features within the application.

**URL:** [https://www.emailjs.com/](https://www.emailjs.com/)

## 5. Google Search Console

**Purpose:** Google Search Console is employed to monitor, maintain, and troubleshoot the website's presence in Google Search results, providing insights into search performance and indexing status.

**URL:** [https://search.google.com/search-console](https://search.google.com/search-console)

## 6. Bing Webmaster Tools

**Purpose:** Bing Webmaster Tools allows for the management of the website's presence on the Bing search engine, offering tools to analyze search performance and submit sitemaps.

**URL:** [https://www.bing.com/webmasters](https://www.bing.com/webmasters)

## 7. Yandex Webmaster Tools

**Purpose:** Yandex Webmaster Tools provides insights and tools to monitor and improve the website's performance in Yandex search results.

**URL:** [https://webmaster.yandex.com/](https://webmaster.yandex.com/)

## Future Considerations

As part of my ongoing SEO strategy, the plan is to submit the sitemap to additional search engines to enhance visibility and indexing across various platforms.

---

This README serves as a centralized reference for the external services integrated into the application, facilitating easy access and management for current and future development efforts.

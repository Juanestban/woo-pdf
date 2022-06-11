const withServiceWorker = require('next-service-worker');

/** @type {import('next').NextConfig} */

module.exports = withServiceWorker({
  reactStrictMode: true,
  serviceWorker: {
    // service worker config here...

    workbox: {
      // workbox config here...
    },
  },
});

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const production = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: !production,
  },
});

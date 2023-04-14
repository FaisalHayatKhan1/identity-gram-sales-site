// /** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['icd-media.s3.ap-south-1.amazonaws.com'],
  },
  env: {
    NEXT_APP_VERSION: process.env.NEXT_APP_VERSION,
    NEXTAUTH_URL: process.env.NEXT_PUBLIC_API_KEY,
  },
};

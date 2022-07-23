/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,

    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN: process.env.FIREBASE_AUTHDOMAIN,
    FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
    FIREBASE_STORAGEBUCKET: process.env.FIREBASE_STORAGEBUCKET,
    FIREBASE_MESSAGINGSENDERID: process.env.FIREBASE_MESSAGINGSENDERID,
    FIREBASE_APPID: process.env.FIREBASE_APPID,
    FIREBASE_MID: process.env.FIREBASE_MID,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        CARS: process.env.NEXT_PUBLIC_CAR_API_KEY,
    },
};

module.exports = nextConfig;

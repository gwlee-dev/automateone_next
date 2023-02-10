/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        prependData: `@import "@/styles/_variables.scss"; @import "@/styles/_mixins.scss";`
    },
};

module.exports = nextConfig;

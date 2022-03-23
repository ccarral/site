const path = require("path");

const title = "📷 🐶 🖥️";
const description = "Cosas que sólo me interesan a mí.";
const default_img = "/setup3.jpg";

const autometa_options = {
    site: { name: title, twitter: "0xC4C4" },

    description_sources: ["default"],

    canonical_base: "https://ccarral.github.io",

    default_img,

    default_description: description
};

module.exports = {
    locales: {
        "/": {
            lang: "es-MX", // this will be set as the lang attribute on <html>
            title,
            description
        }
    },

    configureWebpack: { resolve: { alias: {} } },

    markdown: {
        anchor: {
            level: 2,
        },
        extendMarkdown: md => {
            md.use(require('markdown-it-highlightjs'))
            let container = require("markdown-it-container");
            md.use(require("markdown-it-attrs"));
            md.use(container, "date");
            md.use(container, "lang");
        }
    },

    plugins: [["autometa", autometa_options]]
};

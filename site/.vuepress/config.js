const title = "📷 🐶 🖥️";
const description = "Cosas que sólo me interesan a mí.";
const default_img = "/setup3.jpg";

const autometa_options = {
  site: {
    name: title,
    twitter: "aguacateglory"
  },

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

  markdown: {
    anchor: {
      permalinkSymbol: ""
    },
    extendMarkdown: md => {
      md.use(require("markdown-it-attrs"));
      md.use(require("markdown-it-container"), "date");
    }
  },

  plugins: [["autometa", autometa_options]]
};

const title = "📷 🐶 🖥️";
const description = "Cosas que sólo me interesan a mí.";

module.exports = {
  head: [
    ["meta", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { property: "og:image", content: "/setup3.jpg" }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }]
  ],

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
  }
};

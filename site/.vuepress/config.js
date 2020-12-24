module.exports = {
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  locales: {
    "/": {
      lang: "es-MX", // this will be set as the lang attribute on <html>
      title: "📷 🐶 🖥️",
      description: "Cosas que sólo me interesan a mí"
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

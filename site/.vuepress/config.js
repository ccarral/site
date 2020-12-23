module.exports = {
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

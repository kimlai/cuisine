module.exports = config => {
  const markdownIt = require("markdown-it");
  const markdownItFootnote = require("markdown-it-footnote");
  const markdownLib = markdownIt({ html: true }).use(markdownItFootnote);
  config.setLibrary("md", markdownLib);

  config.addPassthroughCopy("css");
  config.addPassthroughCopy("images");

  config.addCollection("recipes", collection =>
    collection
      .getFilteredByGlob("recipes/*.md")
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
  );
};

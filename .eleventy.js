const moment = require('moment');

module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  eleventyConfig.addNunjucksFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });
  eleventyConfig.addNunjucksFilter("reverse", function(array) {
    return array.slice().reverse();
  });

  // Add the date filter
  eleventyConfig.addNunjucksFilter("date", function(date, format) {
    return moment(date).format(format);
  });

  return {
    pathPrefix: "bo",
    url: "https://jordanne.ca",
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk", // use Nunjucks for Markdown files
    htmlTemplateEngine: "njk", // use Nunjucks for HTML files
    templateFormats: ["md", "njk", "html"], // use Nunjucks for .md, .njk, and .html files
    dir: {
      input: "src",
      output: "public",
    },
  };
};
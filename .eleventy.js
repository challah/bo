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

  return {
    pathPrefix: "bo",
    url: "https://jordanne.ca",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
    },
  };
};
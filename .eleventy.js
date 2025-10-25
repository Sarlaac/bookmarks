module.exports = function(eleventyConfig) {

  // Read the repository name from an environment variable (used by GitHub Actions)
  const pathPrefix = "https://docs.sarlaac.ca/bookmarks/";

  // FIX: This line ensures the 'css' folder and its contents are copied
  // from 'src' to the root of the '_site' directory.
  eleventyConfig.addPassthroughCopy("src/css");

  // 💡 FIX: Add a custom date filter to handle the 'date' filter not found error.
  eleventyConfig.addFilter("date", function(dateString, format) {
    if (format === 'yyyy') {
        return new Date().getFullYear();
    }
    // Add more complex formatting here if needed later,
    // but for now, this covers the footer year.
    return dateString;
  });

  return {
    pathPrefix: pathPrefix, // Add this line
    dir: {
      input: "src",
      output: "_site"
    },
    // Use Nunjucks for layouts and Markdown for pages
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
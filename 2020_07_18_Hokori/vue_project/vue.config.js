const PATH = require("path");
function resolve(dir) {
  return PATH.join(__dirname, dir);
}

module.exports = {
  outputDir: "dist",
  devServer: {
    open: true,
    port: 8888,
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("components", resolve("./src/components"))
      .set("layouts", resolve("./src/layouts"))
      .set("store", resolve("./src/store"))
      .set("views", resolve("./src/views"))
      .set("router", resolve("./src/router"));
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/_variable.sass"`,
      },
    },
  },
};

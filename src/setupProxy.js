const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/kaleid",
    createProxyMiddleware({
      target: "https://nimo.sjtu.edu.cn",
      changeOrigin: true,
    })
  );
};

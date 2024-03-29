const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    proxy: "http://localhost:8000",
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws",
    },
  },
});

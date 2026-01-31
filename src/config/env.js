function loadConfig() {
  return {
    mode: process.env.RIAM_MODE || "RSOF",
    port: process.env.PORT || 3001
  };
}

module.exports = loadConfig;

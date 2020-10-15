module.exports = {
  essugar: [{
    source: "./src/index.jsx",
    target: "./dist/index.js",
    env: process.env.NODE_ENV,
    jsx: true
  }],
  static: [
    {
      source: "./src/index-bundled.html",
      target: "./dist/index.html"
    }
  ],
  watchDirs: ["./src"],
  manifest: {
    webRoot: "./dist"
  },
  plugins: [require("faucet-pipeline-essugar")]
};


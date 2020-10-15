const kind = process.env.NODE_ENV == "production" ? "production.min" : "development";

module.exports = {
  js: [{
    source: "./src/index.jsx",
    target: "./dist/index.js",
    jsx: true,
    externals: {
      react: "React",
      "react-dom": "ReactDOM",
    }
  }],
  static: [
    {
      source: "./src/index.html",
      target: "./dist/index.html"
    },
    {
      source: `react/umd/react.${kind}.js`,
      target: "./dist/react.js",
    },
    {
      source: `react-dom/umd/react-dom.${kind}.js`,
      target: "./dist/react-dom.js",
    }
  ],
  watchDirs: ["./src"],
  manifest: {
    webRoot: "./dist"
  }
};


export default {
  entry: "src/index.js",
  disableCSSModules: true,
  extraBabelPlugins: [
    "transform-runtime",
     [
        "import", {
          "libraryName": "antd-mobile",
          "style": "css"
        }
      ]
  ]
}

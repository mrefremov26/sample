module.exports = {
  "presets": ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    [
      "formatjs",
      {
        "idInterpolationPattern": "[sha512:contenthash:base64:6]",
        "ast": true
      }
    ]
  ]
}

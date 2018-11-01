const env = require('./env-config.js')

module.exports = {
  "presets": [
    "next/babel"
  ],
  "plugins": [
    "styled-components",
    ['transform-define', env]
  ]
};

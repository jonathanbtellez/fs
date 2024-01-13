module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,

    "cypress/globals": true
  },
  "extends": [
    // ...
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
  }
  },
  "plugins": [
    "react", "jest", "cypress"
  ],
  "rules": {
    // ...
  }
}
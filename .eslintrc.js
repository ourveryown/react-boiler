module.exports = {
  extends: ["standard", "standard-react", "plugin:jest/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      arrowFunctions: true
    }
  },
  rules: {
    "react/prop-types": ["off"],
    "jest/no-disabled-tests": ["off"]
  },
  globals: {
    fetch: false,
    Event: false,
    localStorage: false,
    sessionStorage: false
  }
};

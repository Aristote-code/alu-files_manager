module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "no-console": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
    "class-methods-use-this": "off",
  },
};

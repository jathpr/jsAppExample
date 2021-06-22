module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["eslint-plugin-import", "prettier"],
};

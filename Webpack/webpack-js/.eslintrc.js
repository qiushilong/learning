module.exports = {
  extends: ["eslint:recommended"], // 使用 eslint 自带规则
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecaFeatures: {
      jsx: true,
    },
  },

  rules: {
    semi: "error",
    "no-var": "error",
  },
};

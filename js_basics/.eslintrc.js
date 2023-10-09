module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'google',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "max-len": ["error", { "code": 120 }],
    "indent": ["error", 2],
    "no-tabs": "error"
  }
};

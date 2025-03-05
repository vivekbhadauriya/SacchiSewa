module.exports = {
    extends: 'next/core-web-vitals',
    rules: {
      // Set strict enforcement but with specific exceptions if needed
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }],
      "react/no-unescaped-entities": "error",
      "@typescript-eslint/no-empty-object-type": "error",
      "@next/next/no-img-element": "warn" // Keep as warning since it doesn't break builds
    }
  }
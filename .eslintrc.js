module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["react", "@typescript-eslint", "jsx-a11y", "lodash-fp"],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "react/jsx-filename-extension": "off",
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    "comma-dangle": [2, "always-multiline"],
    "import/imports-first": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'max-len': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'linebreak-style': 0,
  },
};

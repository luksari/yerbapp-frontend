module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["react", "@typescript-eslint", "lodash-fp", "import"],
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
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      "typescript": {
        "alwaysTryTypes": true // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // use <root>/path/to/folder/tsconfig.json
      "typescript": {
        "directory": "./tsconfig.json"
      },
    }
  },
  rules: {
    "react/jsx-filename-extension": "off",
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    "comma-dangle": [2, "always-multiline"],
    "import/imports-first": 0,
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
    '@typescript-eslint/no-non-null-assertion': 0,
    "indent": ["warn", 2],
    "react/jsx-indent": ["warn", 2, { "checkAttributes": true}],
    'react/prop-types': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
};

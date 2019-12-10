module.exports = {
    "parser": "babel-eslint",
    "env": {
        "jest": true,
        "node": true,
        "es6": true,
        "commonjs": true,
        "browser": true
  
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeature": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "react/prop-types": "error",
      "react/prefer-stateless-function": 2,
      "react/forbid-prop-types": "warn",
      "react/no-danger": 0,
      "no-underscore-dangle": 0,
      "import/prefer-default-export": 0,
      "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
      "no-param-reassign": "error",
      "no-unused-expressions": "error",
      "no-console": ["error", { "allow": ["warn", "error", "log", "info"] }],
      "newline-after-var": "error",
      "newline-before-return": "error",
      "max-statements": ["warn", 20, { "ignoreTopLevelFunctions": true }],
      "complexity": ["warn", { "max": 10 }],
      "func-style": ["error", "expression", { "allowArrowFunctions": true }],
      "max-params": ["warn", { "max": 5 }],
    },
    "globals": {
      "window": true,
      "fetch": true,
      "document": true,
      "localStorage": true,
      "FormData": true,
      "FileReader": true,
      "Blob": true,
      "navigator": true,
      "BASE_PATH": true,
      "API_URL": true
    }
  }
  
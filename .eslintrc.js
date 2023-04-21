module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "es2021": true,
    },
    "ignorePatterns": ["node_modules", "dist", "build"],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": 2022,
        "ecmaFeatures": { "jsx": true },
        "sourceType": "module"
    },
    "rules": {
        // "indent": ["error", 2, { "SwitchCase": 1 }],
        "indent": "off",
        "prettier/prettier": "error",
        "linebreak-style": [0, "unix"],
        "quotes": ["error", "single"],
        "semi": [2, "always"],
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto"
            }
        ],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": 0,
        "import/no-unresolved": [2, { "caseSensitive": false }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/order": [
        2,
        {
            "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
            "newlines-between": "always"
        }
        ]
    },
    "settings": {
        "import/resolver": {
            "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"],
            "moduleDirectory": ["node_modules", "src/"]
            }
        },
        "react": {
            "version": "detect"
          }
    },
};

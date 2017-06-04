module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react", "react-native", "jsx-a11y", "import"
    ],
    "ecmaFeatures": {
        "jsx": true
    },
    "rules": {
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 2,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]

    }
};
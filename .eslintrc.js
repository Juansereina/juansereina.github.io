module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "react-hooks"
    ],
    rules:{
        "linebreak-style": 0,
        "jsx-a11y/anchor-is-valid": [ "error", { 
            "specialLink": [ "hrefLeft", "hrefRight" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
          }],
          "import/no-extraneous-dependencies": 0,
          "class-methods-use-this": 0,
          "no-undef": 0,
          "no-plusplus": ,
          "react-hooks/rules-of-hooks": "error",
          "react-hooks/exhaustive-deps": "warn"
      },
    globals: {
        "window": true,
        "document": true
    },
    "parser": "babel-eslint"
};
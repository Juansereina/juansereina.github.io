module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    rules:{
        "linebreak-style": 0,
        "jsx-a11y/anchor-is-valid": [ "error", { 
            "specialLink": [ "hrefLeft", "hrefRight" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
          }],
          "import/no-extraneous-dependencies": 0,
          "class-methods-use-this": 0
      },
    globals: {
        "window": true,
        "document": true
    }
};
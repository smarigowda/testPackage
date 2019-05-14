require("@babel/register")({
    presets: [
        [ "@babel/env" ],
    ]
});

require('./src/main');
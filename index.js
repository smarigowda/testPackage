require("@babel/register")({
    presets: [
        [ "@babel/env" ],
    ]
});

console.log('--- end of program...');
require('./src/main');
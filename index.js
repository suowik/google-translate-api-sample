const translate = require('extended-google-translate-api');

translate("parlous", "en", "de").then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}).catch(console.log);

translate("dog", "en", "de", {examples: false, collocations: false}).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}).catch(console.log);
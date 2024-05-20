const path = require("path");

//Dir name
console.log(path.dirname(__filename));

//File name
console.log(path.basename(__filename));

//File ext
console.log(path.extname(__filename));

//File object
console.log(path.parse(__filename));

//Join paths
console.log(path.join(__dirname, path.basename(__filename)))
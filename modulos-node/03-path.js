const path = require('node:path');



const fileName = path.basename(__filename);
const fileExtension = path.extname(__filename);
console.log(fileExtension)
console.log(fileName)

const result = path.relative(__dirname, "/Users/ivanpereira/Dev/nodejs-2semanas/modulos-node/");

console.log(path.join(__dirname, "hola", "jejje"))

const absolutePath = path.resolve("modulos-node/hola/otra-mas/index.js")

console.log(absolutePath)
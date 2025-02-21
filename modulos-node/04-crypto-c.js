// Generador de claves

const crypto = require("node:crypto");

const randomKey = crypto.randomBytes(16).toString("hex");

console.log(randomKey);

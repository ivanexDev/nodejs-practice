const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32); //Clave de 32 bytes
const iv = crypto.randomBytes(16); //Vector de inicializaón (IV)

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update("texto codificado", "utf8", "hex");
encrypted += cipher.final("hex");

console.log(encrypted);

//decrypt

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");

console.log(decrypted);

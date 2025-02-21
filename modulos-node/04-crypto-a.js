const crypto = require("node:crypto");

const hash = crypto.createHash("sha256").update("hola mundo").digest("hex");
console.log(hash);

// Esto creara un hash a partir de un string, siempre generara el mismo valor,
// no es posible hacer el procedimiento inverso.

/**
    1.	createHash('sha256') → Usa el algoritmo SHA-256.
	2.	.update('Hola mundo') → Agrega el texto a convertir en hash.
	3.	.digest('hex') → Devuelve el hash en formato hexadecimal.
 */

//Hash-based Message Authentication Code
//Este te permite generar un hash agregandole una secret key.
const secretKey = "clave-secreta";
const hash2 = crypto
  .createHmac("sha256", secretKey)
  .update("Nuevo hash")
  .digest("hex");
const hash3 = crypto
  .createHmac("sha256", secretKey)
  .update("Nuevo hash")
  .digest("hex");

console.log(hash2);

console.log(hash2 === hash3);

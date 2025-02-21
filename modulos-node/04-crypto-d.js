const crypto = require("node:crypto");

const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048, // Tamaño de la clave
});

console.log(
  "Clave Privada:",
  privateKey.export({ type: "pkcs1", format: "pem" }),
);
console.log(
  "Clave Pública:",
  publicKey.export({ type: "pkcs1", format: "pem" }),
);

// Firmando un mensaje

const sign = crypto.createSign("sha256");
sign.update("Mensaje importante");
const signature = sign.sign(privateKey, "hex");

console.log("Firma", signature);

// verificando la firma

const verify = crypto.createVerify("sha256");
verify.update("Mensaje importante");
const isValid = verify.verify(publicKey, signature, "hex");

console.log(isValid);

//TODO: Ver como funciona con la public key/

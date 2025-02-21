function calcularArea(radio) {
  const result = Math.PI * Math.pow(radio, 2);
  console.log(`El area del circulo es: ${result} cm²`);
  return result;
}

module.exports = {
  calcularArea,
};

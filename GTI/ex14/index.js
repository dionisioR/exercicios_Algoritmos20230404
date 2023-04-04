let raio = prompt('Digite o raio:')
let area = Math.PI * Math.pow(raio, 2)
// let a = 3.14 * Math.pow(raio,2)
// let a = 3.14 * raio * raio

let perimetro = 2 * Math.PI * raio
// let perimetro = 2 * 3.14 * raio

console.log(`Área: ${area} Perímetro: ${perimetro}`);
document.write(`Área: ${area.toFixed(2)} Perímetro: ${perimetro.toFixed(2)}`);

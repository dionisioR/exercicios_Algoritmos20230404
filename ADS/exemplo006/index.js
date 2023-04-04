let num = prompt('Digite um número:')

num = parseFloat(num)

console.log(`Potência: ${Math.pow(num, 2)}`);
console.log(`Potência: ${Math.pow(num, 3)}`);
console.log(`Potência: ${Math.pow(num, 4)}`);

console.log(`raiz quadrada: ${Math.sqrt(num).toFixed(3)} `);
console.log(`raiz cúbica: ${Math.cbrt(num).toFixed(3)} `);

const PI = 3.14
console.log(`PI: ${PI}`);
console.log(`PI: ${Math.PI}`)
console.log(`PI: ${Math.PI.toFixed(4)}`)

document.write(`Potência: ${Math.pow(num, 2)}<br>`);
document.write(`Potência: ${Math.pow(num, 3)}<br>`);
document.write(`Potência: ${Math.pow(num, 4)}<br>`);

document.write(`raiz quadrada: ${Math.sqrt(num).toFixed(3)} <br>`);
document.write(`raiz cúbica: ${Math.cbrt(num).toFixed(3)} <br>`);

document.write(`PI: ${PI}<br>`);
document.write(`PI: ${Math.PI}<br>`)
document.write(`PI: ${Math.PI.toFixed(4)}<br>`)

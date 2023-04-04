let num01 = prompt('Digite um número:')
let num02 = prompt('Digite um outro número:')

num01 = parseFloat(num01)
num02 = parseFloat(num02)

console.log(`soma: ${num01 + num02}`);
console.log(`subtração: ${num01 - num02}`);
console.log(`multiplicação: ${num01 * num02}`);
console.log(`divisão: ${num01 / num02}`);
console.log(`módulo: ${num01 % num02}`);

document.write(`soma: ${num01 + num02}<br>`);
document.write(`subtração: ${num01 - num02}<br>`);
document.write(`multiplicação: ${num01 * num02}<br>`);
document.write(`divisão: ${num01 / num02}<br>`);
document.write(`módulo: ${num01 % num02}<br>`);

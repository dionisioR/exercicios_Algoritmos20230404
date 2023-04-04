let num = prompt('Digite um número: ')
let valor = prompt('Digite o valor para as operações:')

num = parseFloat(num)
valor = parseFloat(valor)

document.write(`Número digitado: ${num}<br>`)
console.log(`Número digitado: ${num}`)

document.write(`Valor: ${valor}<br>`)
console.log(`valor: ${valor}`)

// + 3
// num = num + valor
num += valor
console.log('Soma: ', num);
document.write(`Soma: ${num} <br>`)


// - 
// num = num - valor
num -= valor
console.log('Subtração: ', num);
document.write(`Subtração: ${num}<br>`)

// num = num * valor
num *= valor
console.log('Mult: ', num);
document.write(`Mult: ${num}<br>`)

// num = num / valor
num /= valor
console.log('Divisão: ', num);
document.write(`Divisão: ${num}<br>`)

// num = num % valor
num %= valor
console.log('Mod: ', num);
document.write(`Mod: ${num}<br>`)

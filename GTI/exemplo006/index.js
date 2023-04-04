let nome = prompt('Digite seu nome:')
let idade = prompt('Digite sua idade:')

// Interpolação / concatenação / template string
console.log(`O nome digitado foi ${nome} e sua idade é  ${idade}.`)

document.write(`O nome digitado foi ${nome} e sua idade é  ${idade}.`)

console.log(typeof nome)
console.log(typeof idade)

console.log('--------------');

console.log('O nome digitado foi ' + nome + ' e sua idade é ' + idade + '.');

console.log('O nome digitado foi', nome, 'e sua idade é', idade, '.');

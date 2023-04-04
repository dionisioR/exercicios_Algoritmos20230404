let nome = prompt('Digite um nome: ')
let idade = prompt('Digite a idade')

console.log(nome);
console.log(typeof nome); // retorna o tipo de dado
console.log('--------------');
console.log(idade);
console.log(typeof idade);
console.log('--------------');

// concatenação
console.log('O nome digitado foi ' + nome + ' e a idade digitada foi: ' + idade + '.');

console.log('O nome digitado foi', nome, 'e a idade digitada foi', idade, '.');


console.log(`O nome digitado foi ${nome} e a idade digitada foi ${idade}.`);



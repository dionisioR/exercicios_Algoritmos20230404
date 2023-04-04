let lado = parseFloat(prompt('Digite o valor referente ao lado do quadrado.'))

let area = lado * lado
let perimetro = lado * 4 // lado + lado + lado + lado

document.write(`Área do quadrado = ${area}.<br>`)
document.write(`Perímetro do quadrado = ${perimetro}`)

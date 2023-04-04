let div = document.getElementById('conteudo')

let numero = 1

while (numero <= 100) {
    div.innerHTML += numero + ' | '

    if (numero % 10 == 0) {
        div.innerHTML += '<br>'
    }

    console.log(numero)
    numero++
}

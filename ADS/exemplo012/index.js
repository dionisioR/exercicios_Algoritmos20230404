let numero = document.getElementById('parImpar')
let btn = document.getElementById('btn')
let div = document.getElementById('conteudo')

function parOuImpar() {
    let imparOuPar = (numero.value % 2 == 0) ? 'PAR' : 'ÍMPAR'
    console.log(imparOuPar)
    div.innerHTML = imparOuPar;
}

btn.addEventListener('click', parOuImpar)

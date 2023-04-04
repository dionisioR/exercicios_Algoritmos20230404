let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

function parImpar() {
    // console.log('0i');
    let numero = document.getElementById('numero').value

    if (numero > 0) {
        if (numero % 2 == 0) {
            div.innerHTML = '<h1>PAR</h1>'
        } else {
            div.innerHTML = 'ÍMPAR'
        }
    } else {
        div.innerHTML = '<h1>ERRO</h1>'
    }
}

btn.addEventListener('click', parImpar)

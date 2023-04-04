let numero = document.getElementById('numero')
let btn = document.getElementById('btn')
let root = document.getElementById('root')

function calcular() {
    // console.log(numero);
    // console.log(btn);
    // console.log(root);

    console.log(`A raiz do nº ${numero.value} e ${Math.sqrt(numero.value)}.`)

    // root.innerText 
    // root.textContent 
    root.innerHTML = `<h1>A raiz do nº ${numero.value} e ${Math.sqrt(numero.value)}.</h1>`
}

btn.addEventListener('click', calcular)

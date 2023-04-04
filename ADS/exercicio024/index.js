let btn = document.getElementById('btn')
let resultado = document.getElementById('resultado')
function calcular() {

    let salario = parseFloat(document.getElementById('salario').value)
    let qtdKw = parseFloat(document.getElementById('qtd').value)

    let kw = salario / 7 / 100
    let valorTotal = kw * qtdKw
    let valorComDesconto = valorTotal * 0.9

    resultado.innerHTML = `
        Valor do Kw: R$ ${kw.toFixed(2)} <br>
        Valor total a pagar: R$ ${valorTotal.toFixed(2)} <br>
        Valor com desconto: R$ ${valorComDesconto.toFixed(2)}
    `


}

btn.addEventListener('click', calcular)

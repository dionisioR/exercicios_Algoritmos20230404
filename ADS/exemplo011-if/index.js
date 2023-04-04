let mes = document.getElementById('mes')
let btn = document.getElementById('btn')
let div = document.getElementById('conteudo')

function escreveMes() {
    let numberMes = mes.value

    if (numberMes == '1') {
        console.log('Mês de Janeiro');
        div.innerHTML = `<h2 class="verde"> Mês de Janeiro </h2>`

    } else if (numberMes == "2") {
        console.log('Mês de Fevereiro');
        div.innerHTML = `<h2 class="verde"> Mês de Fevereiro </h2>`

    } else if (numberMes == 3) {
        console.log('Mês de Março');
        div.innerHTML = `<h2 class="verde"> Mês de Março </h2>`

    } else if (numberMes == 4) {
        console.log('Mês de Abril');
        div.innerHTML = `<h2 class="verde"> Mês de Abril </h2>`

    } else if (numberMes == 5) {
        console.log('Mês de Maio');
        div.innerHTML = `<h2 class="verde"> Mês de Maio </h2>`

    } else if (numberMes == 6) {
        console.log('Mês de Junho');
        div.innerHTML = `<h2 class="verde"> Mês de Junho </h2>`

    } else {
        console.log('Mês não encontrado');
        div.innerHTML = `<h2 class="vermelho"> Mês não encontrado </h2>`
    }

}


btn.addEventListener('click', escreveMes)

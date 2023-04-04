let mes = document.getElementById('mes')
let btn = document.getElementById('btn')
let div = document.getElementById('conteudo')

function apagar() {
    let img = document.getElementById('imgErro')
    img.style.display = 'none'
}
function escreveMes() {

    switch (mes.value) {
        case '1':
            console.log('Janeiro')
            div.innerHTML = 'Janeiro'
            break
        case '2':
            console.log('Fevereiro')
            div.innerHTML = 'Fevereiro'
            break
        case '3':
            console.log('Março')
            div.innerHTML = 'Março'
            break
        case '4':
            console.log('Abril')
            div.innerHTML = 'Abril'
            break
        case '5':
            console.log('Maio')
            div.innerHTML = 'Maio'
            break
        case '6':
            console.log('Junho')
            div.innerHTML = 'Junho'
            break
        default:
            console.log('Mês não encontrado')
            // div.innerHTML = '<h1 style="color:red">Mês não encontrado</h1>'

            let erro = document.createElement('img')
            erro.src = 'erro.jpg'
            erro.id = 'imgErro'
            div.appendChild(erro)

            break
    }
}

btn.addEventListener('click', escreveMes)

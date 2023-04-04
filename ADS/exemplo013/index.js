let mes = document.getElementById('mes')
let btn = document.getElementById('btn')
let div = document.getElementById('conteudo')

function apagar() {
    if (document.getElementById('imgErro')) {
        let img = document.getElementById('imgErro')
        div.removeChild(img)
    }
}

function escreveMes() {

    switch (mes.value) {
        case '1':
            apagar()
            console.log('Janeiro')
            div.innerHTML = 'Janeiro'
            break
        case '2':
            apagar()
            console.log('Fevereiro')
            div.innerHTML = 'Fevereiro'
            break
        case '3':
            apagar()
            console.log('Março')
            div.innerHTML = 'Março'
            break
        case '4':
            apagar()
            console.log('Abril')
            div.innerHTML = 'Abril'
            break
        case '5':
            apagar()
            console.log('Maio')
            div.innerHTML = 'Maio'
            break
        case '6':
            apagar()
            console.log('Junho')
            div.innerHTML = 'Junho'
            break
        default:
            console.log('Mês não encontrado')
            // div.innerHTML = '<h1 style="color:red">Mês não encontrado</h1>'

            div.innerHTML = '   '
            let erro = document.createElement('img')
            erro.src = 'erro.jpg'
            erro.id = 'imgErro'
            div.appendChild(erro)

            break
    }
}

btn.addEventListener('click', escreveMes)

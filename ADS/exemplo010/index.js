let nome = document.getElementById('inputNome')
let sobrenome = document.getElementById('inputSobrenome')
let idade = document.getElementById('inputIdade')
let div = document.getElementById('conteudo')

let btn = document.getElementById('inputBtn')

function escreve() {
    console.log(nome.value);
    console.log(sobrenome.value);
    console.log(idade.value);

    div.innerHTML = `O nome digitado foi ${nome.value} ${sobrenome.value} e sua idade é ${idade.value}.`
}

// btn.addEventListener('evento',funcao)
btn.addEventListener('click', escreve)

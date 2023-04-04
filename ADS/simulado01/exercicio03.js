let cont = 1
while (cont <= 5) {

    let numero = prompt('Digite um número')
    let quadrado = Math.pow(numero, 2)
    console.log(`Número: ${numero} - Quadrado: ${quadrado}`);
    document.write(`Número: ${numero} - Quadrado: ${quadrado}<br>`);

    cont++
}

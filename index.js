//VARIABLES
const nome = prompt('Insira seu nome:')
const label = document.querySelector('#label')
const labelAltura = document.querySelector('#altura')
const labelPeso = document.querySelector('#peso')
const labelIMC = document.querySelector('#imc')
var altura
var peso
var imc
var classificacao
var imcAprox

//FUNCOES
function requestAltura() {
    altura = prompt('Insira sua altura em centímetros (Ex.: 180cm):')
    //não aceitar números menores que 0 ou strings
    if (altura > 0) {}
    else {
        alert('Valor inválido')
        requestAltura()
    }
}

function requestPeso() {
    peso = prompt('Insira seu peso em kg:')
    if (peso > 0) {}
    else {
        alert('Valor inválido')
        requestPeso()
    }
}
//executar funcoes
requestAltura()
requestPeso()

//conversão para float e calculo do IMC
altura = parseFloat(altura) / 100
peso = parseFloat(peso)
imc = peso / (altura * altura)

//comparação do IMC e classificação
if (imc < 16) {classificacao = "Baixo peso muito grave"} // 15.99 pra baixo
else if (imc < 17) {classificacao = "Baixo peso grave"}  // de 16 a 16.99
else if (imc < 18.5) {classificacao = "Baixo peso"}      // de 17 a 18.49
else if (imc < 25) {classificacao = "Peso ideal"}        // de 18.5 a 24.99
else if (imc < 30) {classificacao = "Acima do peso"}     // de 25 a 29.99
else if (imc < 35) {classificacao = "Obesidade grau I"}  // de 30 a 34.99
else if (imc < 40) {classificacao = "Obesidade grau II"} // de 35 a 39.99
else {classificacao = "Obesidade grau III"}              // de 40 pra cima

//exibir o resultado
labelAltura.innerHTML = "Altura: " + altura + "m"
labelPeso.innerHTML = "Peso: " + peso + "kg"
labelIMC.innerHTML = "IMC: " + imc

//arrendondar
if ((imc - parseInt(imc)) < 0.5) {
    imcAprox = parseInt(imc)
}
else {imcAprox = parseInt(imc) + 1}

label.innerHTML = nome + ", você tem um Índice de Massa Corporal (IMC) de aproximadamente " + imcAprox + ", sendo classificado como: " + classificacao
// 16.	Faça um programa que verifique se um número é positivo, negativo ou zero.

let valor = parseInt(prompt("Digite um valor: "))

if (valor > 0) {
    alert("Este numero é positivo!")
} else if (valor < 0) {
    alert("Este numero é negativo!")
} else if (valor == 0) {
    alert("Este numero é igual a zero!")
}
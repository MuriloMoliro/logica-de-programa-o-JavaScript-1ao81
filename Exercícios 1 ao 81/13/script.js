// 13.	Faça um programa que leia dois números inteiros e verifique se o primeiro é múltiplo do segundo.

let valorUm = parseInt(prompt("Digite o primeiro valor: "))
let valorDois = parseInt(prompt("Digite o segundo valor: "))

if (valorUm % valorDois == 0) {
    alert("O primeiro valor é multiplo do segundo")
} else {
    alert("O primeiro valor não é multiplo do segundo")
}
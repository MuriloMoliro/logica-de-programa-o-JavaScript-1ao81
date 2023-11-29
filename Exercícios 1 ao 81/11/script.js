// 11.	Escreva um programa que calcule a média aritmética entre três números reais inseridos pelo usuário.

let valorUm = parseFloat(prompt("Digite o primeiro valor: "))
let valorDois = parseFloat(prompt("Digite o segundo valor: "))
let valorTres = parseFloat(prompt("Digite o terceiro valor: "))

let media = (valorUm + valorDois + valorTres) / 3

alert("A média aritmética dos três numeros é: " + media)
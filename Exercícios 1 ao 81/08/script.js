// 8.	Escreva um programa que leia dois números inteiros e troque os seus valores, ou seja, o primeiro deve ficar com o valor do segundo e vice-versa.

let valorUm = parseInt(prompt("Digite o primeiro valor: "))
let valorDois = parseInt(prompt("Digite o segundo valor: "))

let armario

armario = valorUm
valorUm = valorDois
valorDois = armario

alert("Os valores trocados são: " + valorUm + " e " + valorDois)
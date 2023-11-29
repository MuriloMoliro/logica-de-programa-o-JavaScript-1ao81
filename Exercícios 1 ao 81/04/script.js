// 4.	Faça um programa que receba três notas de um aluno (cada nota de 0 a 10) e calcule a média ponderada considerando pesos 2, 3 e 5 para as notas, respectivamente

let notaUm = parseInt(prompt("Digite a primeira nota: "))
let notaDois = parseInt(prompt("Digite a segunda nota: "))
let notaTres = parseInt(prompt("Digite a terceira nota: "))

let media = (notaUm + notaDois + notaTres) / 3

alert("A media do aluno é de: " + media)
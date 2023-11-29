// 19.	Faça um programa que receba três notas de um aluno e exiba se ele foi aprovado ou reprovado. A média para aprovação é 7.

let valorUm = parseInt(prompt("Digite a primeira nota: "))
let valorDois = parseInt(prompt("Digite a segunda nota: "))
let valorTres = parseInt(prompt("Digite a terceira nota: "))

let media = (valorUm + valorDois + valorTres) / 3

if (media >= 7) {
    alert("O aluno foi aprovado!")
} else {
    alert("O aluno foi reprovado!")
}
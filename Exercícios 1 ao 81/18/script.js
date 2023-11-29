// 18.	Crie um programa que leia dois números inteiros e exiba o maior deles.

let valorUm = parseInt(prompt("Digite o primeiro valor: "))
let valorDois = parseInt(prompt("Digite o segundo valor: "))

if (valorUm > valorDois) {
    alert("O maior valor é: " + valorUm + " e o menor: " + valorDois)
} else {
    alert("O maior valor é: " + valorDois + " e o menor: " + valorUm
    )
}
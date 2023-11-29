// 17.	Escreva um programa que leia a idade de uma pessoa e exiba uma mensagem indicando se ela é criança, adolescente, adulto ou idoso.

let idade = parseInt(prompt("Insira sua idade: "))

if (idade > 0 && idade < 15) {
    alert("Você é uma criança!")
} else if (idade > 15 && idade < 23) {
    alert("Você é um adolescente!")
} else if (idade > 23 && idade < 60) {
    alert("Você é um adulto(a)!")
} else if (idade > 60 && idade < 90) {
    alert("Você é um idoso(a)!")
} else if (idade > 90) {
    alert("Você esta fazendo hora!")
}
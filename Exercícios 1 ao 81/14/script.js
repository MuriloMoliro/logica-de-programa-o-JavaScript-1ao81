// 14.	Escreva um programa que leia a idade de uma pessoa em anos, meses e dias, e calcule quantos dias de vida ela tem

let anos = parseInt(prompt("Digite sua idade em anos: "))
let mes = parseInt(prompt("Digite qual mes em que voce esta (em numeral) : "))
let dia = parseInt(prompt("Digite qual dia do mes voce esta (em numeral) : "))

let idadeDias = dia + (mes * 30) + (ano * 365)

alert("Sua idade em dias é de: " + idadeDias)
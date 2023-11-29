// 10.	Faça um programa que leia um número inteiro e exiba a sua tabuada de multiplicação até o décimo valor.

let valor = parseInt(prompt("Digite um valor: "))

for(let i = 1; i <= 10; i++){
    alert(valor + " X " + i + " = " + valor * i)
}


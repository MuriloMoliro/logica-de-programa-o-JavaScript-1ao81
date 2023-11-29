// 15.	Crie um programa que leia o salário de um funcionário e calcule o novo salário com um aumento de 15%.

let salario = parseFloat(prompt("Digite seu salario: "))

let salarioNovo = salario + (15/100 * salario)

alert("Seu novo salario é de: " + salarioNovo)
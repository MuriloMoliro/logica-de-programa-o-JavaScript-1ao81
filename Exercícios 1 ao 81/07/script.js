// 7.	Faça um programa que receba o salário base de um funcionário e calcule o seu salário líquido, considerando que o funcionário recebe 5% de comissão sobre o salário base.

let salarioBase = parseFloat(prompt("Digite o valo de seu salario base: "))

let salarioLiquido = salarioBase + (5/100 * salarioBase)

alert("O salario liquido do funcionario é de: " + salarioLiquido)
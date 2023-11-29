// 9.	Crie um programa que leia o valor do depósito mensal em uma poupança e a taxa de juros mensal, e calcule o montante após 12 meses.

let deposito = parseFloat(prompt("Digite o deposito mensal na poupança: "))
let taxa = parseFloat(prompt("Digite a taxa de juros mensal "))

let montante= deposito - (taxa/100 * deposito)

alert(montante)


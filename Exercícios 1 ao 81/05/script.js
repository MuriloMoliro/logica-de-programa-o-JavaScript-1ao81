// 5.	Escreva um programa que leia o preço de um produto e a quantidade comprada, e calcule o valor total a ser pago com desconto de 10% se a quantidade for maior que 10 unidades.

let precoProduto = parseFloat(prompt("Digite o preço do valor comprado: "))
let quantidadeProduto = parseFloat(prompt("Digite a quantidade do produto comprado: "))

if (quantidadeProduto > 10) {
    valorTotal = (precoProduto * quantidadeProduto)
    valorDesconto = valorTotal - (10/100 * valorTotal)
    alert("O valor a ser pago é de: " + valorDesconto)
} else {
    valorTotal = precoProduto * quantidadeProduto
    alert("O valor a ser pago é de: " + valorTotal)
}
/* Exercício 3 - Funções:
- Criar uma função que some 2 números e retorne a essa soma;
- Os números para a função devem ser enviados por parâmetros;
Número 1: 30
Número 2: 70
Soma: 100
*/

function somaDoisNumeros(numero1, numero2) {
    return('Número 1: ' + numero1 + ' / ' + 'Número 2: ' + numero2 + ' / ' + 'Soma: ' + (numero1 + numero2))
}

let soma = somaDoisNumeros(20, 30)
console.log(soma)
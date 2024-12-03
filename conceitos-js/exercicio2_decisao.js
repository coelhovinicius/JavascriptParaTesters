/* Exercício 2 - Estrutura de Decisão: 
    - Percorrer uma lista de cidades;
    - Informar o número da execução;
    - Informar o nome das cidades em cada execução;
    - Para cada item, verificar se a cidade "Guarulhos" está presente na lista;
    - Caso haja na lista, informar;
    - Caso não haja na lista, também, informar;
    - Colocar um separador.
*/

const paises = ['Brasil', 'Argentina', 'Uruguai', 'Paraguai']
var encontrado = false
var encontrar = 'Brasil'

console.log()

paises.forEach((pais, indice) => {
    console.log('Execução', (indice + 1))
    console.log('País:', pais)
    if (pais == encontrar /*'Brasil'*/) {
        encontrado = true
        console.log(pais, 'encontrado!')
    /*} else {
        console.log('País não encontrado!')*/
    }

    console.log('-----------------------------')
})

    if (encontrado == true) {
        console.log('ENCONTRADO!')
    } else {
        console.log('NÃO ENCONTRADO!')
    }

console.log()
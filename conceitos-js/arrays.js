// ARRAYS - LISTA DE DADOS

const paises = ['Brasil', 'Argentina', 'Uruguai', 'Paraguai']

console.log('Lista de países:', paises)

// Manipulação de Arrays (operações com arrays):
paises.push('USA', 'Canada') // Adiciona valores ao final da array
console.log('Lista incluindo ao final:', paises)

paises.unshift('Perú', 'Bolívia') // Adiciona valores ao início da lista
console.log('Lista incluindo ao início:', paises)

paises.pop() // Exclui o último valor da lista
console.log('Lista excluindo ao final:', paises)

paises.shift() // Exclui o primeiro valor
console.log('Lista excluindo ao início:', paises)

console.log('Primeiro nome da lista:', paises[0]) // Acessar uma posição de uma array, utilizando o índice
console.log('Tamanho da lista:', paises.length) // Exibe o tamanho da array


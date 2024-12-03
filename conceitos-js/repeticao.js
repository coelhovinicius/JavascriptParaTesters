// ESTRUTURAS DE REPETIÇÃO

// Repetição por array:
const cidades = ['Guarulhos', 'São Paulo', 'Recife', 'Florianópolis']

console.log('POR ARRAY:')
cidades.forEach((elemento, index) => {
    console.log('Execução', (index + 1))
    console.log(elemento)
})

console.log()

// FOR normal - Percorre a lista e exibe os dados:
console.log('FOR NORMAL:')
for (let indice = 0; indice < cidades.length; indice++) {
    console.log('Execução', (indice + 1))
    console.log(cidades[indice])
}
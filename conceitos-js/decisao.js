// ESTRUTURAS DE DECISÃO

// Trabalhando com constantes
const nome = 'Vinicius'

if (nome == 'Vinicius') {
    console.log('Condição atendida!')
} else {
    console.log('Condição não atendida!')
}

// Trabalhando com Booleanos
const maior_de_idade = true

if (maior_de_idade) { // Se maior_de_idade for igual a true
    console.log('É maior de idade')
} else {
    console.log('Não é maior de idade')
}

if (maior_de_idade == false) { // Se maior_de_idade for igual a false
    console.log('É maior de idade')
} else {
    console.log('Não é maior de idade')
}

// Trabalhando com números
let idade = 43
// let idade = 20
// let idade = 30

if (idade == 43) {
    console.log('Idade:', idade, 'anos')
} else if (idade == 20) {
    console.log('Idade:', idade, 'anos')
} else {
    console.log('Condição não atendida!')
}

if (idade != 43) {
    console.log('Condição atendida!')
} else {
    console.log('Condição não atendida!')
}

if (idade < 43) {
    console.log('Condição atendida!')
} else {
    console.log('Condição não atendida!')
}

if (idade <= 43) {
    console.log('Condição atendida!')
} else {
    console.log('Condição não atendida!')
}

if (idade > 43) {
    console.log('Condição atendida!')
} else {
    console.log('Condição não atendida!')
}

if (idade >= 43) {
    console.log('Condição atendida!')
} else {
    console.log('Condição não atendida!')
}
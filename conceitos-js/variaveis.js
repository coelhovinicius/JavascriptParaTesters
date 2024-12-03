// VAR - Pode ser alterada - Recebe valores tipo String - texto
var nome = 'Vinicius'
nome = 'Coelho'

// LET - Também pode ser alterada - Recebe números - valores tipo Int e Float
let idade = 43
idade = 35

// CONST - Não pode ser alterada
const cidade = 'Guarulhos'
//cidade = 'São Paulo' - Não funciona

// BOOL - Variável Booleana - True ou False
var maior_idade = false // true

// ARRAY - Lista de dados
const paises = ['Brasil', 'Argentina', 'Uruguai', 'Paraguai']

// OBJETO - Variáveis Chave-Valor
let devices = {
    nome: 'iPhone 14',
    preco: '3500',
    // Objeto dentro de Objeto:
    cores: {
        cor1: 'vermelho',
        cor2: 'azul',
        cor3: 'preto',
        cor4: 'branco'
    }
}

// Exibir na tela:
console.log(nome, idade, cidade, paises, devices)
console.log()
console.log(paises[2])
console.log(devices.nome)
console.log(devices.cores.cor1)
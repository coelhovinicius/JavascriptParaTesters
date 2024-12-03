// FUNÇÕES
// Precisa ser "chamada"
// Pode retornar dados

// Função sem parâmetros
function gerarNomeSemParametros() {
    const nome = 'Vinicius'
    const sobrenome = 'Bemfica'
    const idade = 43

    console.log('Nome:', nome)
    console.log('Sobrenome:', sobrenome)
    console.log('Idade:', idade)
    console.log('Nome completo:', nome, sobrenome)
}

gerarNomeSemParametros() // Chama a função

console.log()

// Função com parâmetros
function gerarNomeComParametros(nome, sobrenome, idade) {
    console.log('Nome:', nome)
    console.log('Sobrenome:', sobrenome)
    console.log('Idade:', idade)
    console.log('Nome completo:', nome, sobrenome)
    console.log()
}
// Chamada da função
gerarNomeComParametros('Juliane', 'Bemfica', 38) // Chama a função, informando os parametros
gerarNomeComParametros('Frida', 'Bemfica', 1)

// Função com RETURN
function gerarNomeComReturn(nome, sobrenome) {
    return 'Nome Gerado: ' + nome + ' ' + sobrenome
}
// Chamada da função
const nomeGerado = gerarNomeComReturn('Juliane', 'Uehara')
console.log(nomeGerado)

console.log()
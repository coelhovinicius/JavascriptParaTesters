/* Exercício 1 - Estrutura de Repetição:
    - Percorrer uma lista com 5 nomes;
    - Exibir o número de execuções, começando em "1";
    - Exibir o nome, a cada execução;
    - Colocar separadores (---------------------------------).
     */

    const nomes = ['Julane', 'Vinicius', 'Mochi', 'Nori', 'Frida']

    nomes.forEach((nome, indice) => {
        console.log('Execução', (indice + 1))
        console.log(nome)
        console.log('--------------------------')
    })

    for (let indice = 0; indice < nomes.length; indice++) {
        console.log('Execução', (indice + 1))
        console.log(nomes[indice])
        console.log('--------------------------')

    }
// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa // tirando de dentro do objeto pessoa
console.log(nome, idade) // Ana 5

const { nome: n, idade: i} = pessoa // tirando de dentro do objeto pessoa
console.log(n, i)   // Ana 5

const { sobrenome, bemHumorada = true} = pessoa // tirando de dentro do objeto pessoa mas nao existe
console.log(sobrenome, bemHumorada)   // undefined true porue nao existe

const { endereco: { logradouro, numero, cep} } = pessoa // tirando de dentro do objeto pessoa
console.log(logradouro, numero, cep)  // Rua ABC 1000 undefined porque nao existe
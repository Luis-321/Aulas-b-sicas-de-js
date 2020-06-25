/*function criarPessoas(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criarPessoas('Luis', 'Henrique', 24);
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);*/

const pessoa1 = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    idade: 25,

    fala() {
        console.log(`O meu nome é ${this.nome + " " + this.sobrenome}`);
    },
};

pessoa1.fala();
function App(nome) {
    return `Bom dia ${nome}`;
}

const response = App('Luis');
console.log(response);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(2, 2);
console.log(resultado);

const raiz = function(n) {
    return n ** 0.5;
};

console.log(raiz(9));

const raizQuadrada = n => n ** 0.5;

console.log(raizQuadrada(9));
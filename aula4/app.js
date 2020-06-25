let umaString = "Um texto";
let rato = "O rato roeu a rupa do rei de roma.";

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Dois'));

console.log(rato.replace(/r/, '#'));
console.log(rato.replace(/r/g, '#'));

console.log(rato.length);

console.log(rato.slice(-5, -1));
console.log(rato.split(' ', 3));
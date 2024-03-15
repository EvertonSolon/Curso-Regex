const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';
/*
const regexNove = RegExp('9');
console.log('Métodos da RegExp...');
console.log(regexNove.test(texto));
console.log(regexNove.exec(texto));
*/

const regxLetras = /[a-f]/g;
console.log('Métodos da string...');
console.log(' ');

console.log('Executando texto.match...');
console.log(texto.match(regxLetras));
console.log(' ');

console.log('Executando texto.search...');
console.log(texto.search(regxLetras));
console.log(' ');

console.log('Executando regxLetras.exec...');
console.log(regxLetras.exec(texto));
console.log(' ');

console.log('Executando texto.replace...');
console.log(texto.replace(regxLetras, 'bla'));
console.log(' ');

console.log('Executando texto.split...');
console.log(texto.split(regxLetras));
console.log(' ');

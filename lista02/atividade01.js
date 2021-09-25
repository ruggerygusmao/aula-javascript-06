//a) Exibir no console a posição da letra h na string txt.
let txt = "abcdefghijklm";
console.log(txt.search("h"));

//b) Exibir no console a palavra bananas, use o método slice.
let txt1 = "Posso comer bananas o dia todo";
console.log(txt1.slice(12,20));

//c) Substituir a palavra "Olá" pela palavra "Bem vindo", e exibir no console.
let txt2 = "Olá, mundo";
console.log(txt2.replace("Olá", "Bem vindo"));

//d) Converter o texto em letras maiúsculas e exibir no console.
let txt3 = "Olá, mundo";
console.log(txt3.toLocaleUpperCase());

//e) Converter o texto em letras minúsculas e exibir no console.
let txt4 = "Olá, mundo";
console.log(txt4.toLocaleLowerCase());

//f) Exibir no console o tamanho da string.
let txt5 = "Posso comer bananas o dia todo";
console.log(txt5.length);

//g) Concatenar as strings e exibir no console.
let str1 = "Hello ";
let str2 = "World!";
console.log(str1.concat(str2));

//h) Ordenar o array de frutas em ordem alfabética e exibir no console
const fruits = ["Banana","Orange","Apple","Kiwi"];
console.log(fruits.sort());

//i) Exibir no console o array de frutas, Remover Banana e Kiwi do array de frutas e exibir no console o novo array.
const fruits1 = ["Banana","Orange","Apple","Kiwi"];
fruits1.shift();
fruits1.pop();
console.log(fruits1);

//j) Exibir no console o array de frutas, adicionar Uva, Caju e Kiwi no array de frutas e exibir no console o novo array.
const fruits2 = ["Banana","Orange","Apple"];
fruits2.push("Uva","Caju","Kiwi");
console.log(fruits2);

//k) Exibir no console o array de frutas, adicionar Pera e Manga no início do array de frutas, remover  o último item do array e exibir no console o novo array.
const fruits3 = ["Banana","Orange","Apple"];
console.log(fruits3);
fruits3.unshift("Pera","Manga");
fruits3.pop();
console.log(fruits3);

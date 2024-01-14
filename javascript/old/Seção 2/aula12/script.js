let a = "A"; // -> B
let b = "B"; // -> C
let c = "C"; // -> A

let aux = a;
a = b;
b = c;
c = aux;

console.log(`A = ${a}`);
console.log(`B = ${b}`);
console.log(`C = ${c}`);

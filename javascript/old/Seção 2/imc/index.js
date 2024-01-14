const nome = "Marcos Felipe";
const sobrenome = "Carvalho";
const idade = 22;
const peso = 63.2;
const alturaEmM = 1.69;

let anoDeNascimento = new Date().getFullYear() - idade;

let imc = peso / (alturaEmM * alturaEmM);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoDeNascimento}`);
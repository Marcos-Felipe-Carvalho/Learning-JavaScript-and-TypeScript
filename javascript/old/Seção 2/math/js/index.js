let n1 = prompt("Digite um número para continuar:");
n1 = Number(n1);

let numeroTitulo = document.querySelector("#numero-titulo");
let texto = document.querySelector("#texto");

numeroTitulo.innerHTML += `<strong><h1>Seu número é ${n1}</h1></strong>`;
texto.innerHTML += `Raiz quadrada: ${Math.sqrt(n1)}<br>`;
texto.innerHTML += `${n1} é inteiro: ${Number.isInteger(n1)?"Sim, é inteiro":"Não é inteiro"}<br>`;
texto.innerHTML += `Arredondando para cima: ${Math.ceil(n1)}<br>`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(n1)}<br>`;
texto.innerHTML += `Com duas casas decimais ${Number(n1).toFixed(2)}`;
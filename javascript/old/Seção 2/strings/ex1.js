let nomeCompleto = prompt("Digite seu nome completo");

document.body.innerHTML += `Seu nome é: ${nomeCompleto} <br>`;
document.body.innerHTML += `Seu nome tem ${nomeCompleto.length} letras<br>`;
document.body.innerHTML += `A Segunda letra do seu nome é <strong>"${nomeCompleto.charAt(1)}"</strong><br>`;
document.body.innerHTML += `Qual o primeiro indice da letra "a" no seu nome? ${nomeCompleto.indexOf("a")}<br>`;
document.body.innerHTML += `Qual o primeiro indice da letra "a" no seu nome? ${nomeCompleto.lastIndexOf("a")}<br>`;
document.body.innerHTML += `As últimas três letras do seu nome são: ${nomeCompleto.slice(nomeCompleto.length-3, nomeCompleto.length)}<br>`;
document.body.innerHTML += `As palavras do seu nome é: ${nomeCompleto.split(' ')}<br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeCompleto.toUpperCase()}<br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeCompleto.toLowerCase()}<br>`;
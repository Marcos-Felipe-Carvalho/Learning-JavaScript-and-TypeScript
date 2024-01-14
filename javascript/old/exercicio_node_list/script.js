const conteudo = document.querySelector('.container');
const paragrafos = conteudo.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const corBody = estiloBody.backgroundColor;

for(let valor of paragrafos){
    valor.style.backgroundColor = corBody;
    valor.style.color = "#ffffff"
}
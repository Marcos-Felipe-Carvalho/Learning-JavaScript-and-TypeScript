const elementos = [
    {tag: "p", texto: "Frase 1"},
    {tag: "div", texto: "Frase 2"},
    {tag: "footer", texto: "Frase 3"},
    {tag: "section", texto: "Frase 4"},
]

const body = document.body;

for(let i=0; i<elementos.length;i++){
    let {tag, texto} = elementos[i];
    let elemento = document.createElement(tag);
    elemento.textContent = texto;
    body.appendChild(elemento);
}
let pessoas = [];

document.querySelector("#btnEnviar").addEventListener('click', () => {

    let nome = document.querySelector("#nome").value;
    let sobrenome = document.querySelector("#sobrenome").value;
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;

    let pessoa = criarPessoa(nome, sobrenome, peso, altura);
    pessoas.push(pessoa);
    exibirPessoas(pessoas);
    console.log(pessoas);
})


const criarPessoa = (nome, sobrenome, peso, altura) => {
    return {
        nome,
        sobrenome,
        peso,
        altura
    }
}


const exibirPessoas = (pessoas) => {

    document.querySelector("#view").innerHTML = "";
    pessoas.forEach(pessoa => {
        document.querySelector("#view").innerHTML += `
        <p><strong>Nome:</strong> ${pessoa.nome}</p>
        <p><strong>Sobrenome:</strong> ${pessoa.sobrenome}</p>
        <p><strong>Peso:</strong> ${pessoa.peso}</p>
        <p><strong>Altura:</strong> ${pessoa.altura}</p><br>
        `;
    });

}

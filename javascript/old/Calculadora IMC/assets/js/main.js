//Valores digitados no formulário
const form = document.querySelector('.form');

//Função para receber os dados digitados
const receberParametros = (e) =>{

    e.preventDefault();// Impede o comportamento padrão de recarregar a página
    // Obtém os valores de peso e altura do formulário
    const peso = Number(form.querySelector('#peso').value);
    const altura = Number(form.querySelector('#altura').value);
    let mensagem  = "";
    let classe = "";

    if(validarDados(peso, altura)){
        let imc = calcularImc(peso, altura);
        mensagem = `O resultado do seu IMC é ${imc.resultado_imc.toFixed(2)}, você se encontra na categoria ${imc.categoria_imc}`;
        classe = "success";
        criarHTML(mensagem, classe);// Cria o elemento HTML de resultado
        
    }else{
        mensagem = "Valores inválidos, verifique os parâmetros e tente novamente";
        classe = "error";
        criarHTML(mensagem, classe); // Cria o elemento HTML de erro
    }

}

// Função para validar os dados de peso e altura
const validarDados = (peso=0, altura=0) =>{
    // Verifica se os valores de peso e altura são números e estão dentro das faixas aceitáveis
    const verificaTipo = typeof peso == 'number' && typeof altura == 'number';
    const verificaValores = (peso >= 40 && peso <= 150) &&  (altura >= 100 && altura <= 220);

    return verificaTipo && verificaValores; 
}

// Função para calcular o IMC e determinar a categoria
const calcularImc = (peso, altura)=> {

    let imc = peso / (altura/100 * altura/100)
    let categoria = "";

    if(imc<18.5){
        categoria = "Magreza";
    }else if(imc >= 18.5 && imc <=24.9){
        categoria = "Peso Normal"
    }else if(imc >= 25 && imc <=29.9){
        categoria = "Sobrepeso"
    }else if(imc >= 30 && imc <=39.9){
        categoria = "Obesidade Grau 1"
    }else if(imc >= 40){
        categoria = "Obesidade Grau 2"
    }

    return {
        resultado_imc: imc, 
        categoria_imc: categoria
    }
}

// Função para criar o elemento HTML de resultado
const criarHTML = (msg, classe) => {
        let p = "";
        let lblResult = "";
        let divResult = "";
        const divContainer = document.querySelector(".container");
        
        // Remove o elemento de resultado anterior, se existir
        if (divContainer.contains(document.querySelector(".result"))) {
            divContainer.removeChild(document.querySelector(".result"));
        }

        // Cria um novo elemento de resultado com a mensagem e classe fornecidas
        divResult = document.createElement("div");
        divResult.classList.add("result");
        divResult.classList.add(classe);

        p = document.createElement("p");
        lblResult = msg;

        p.textContent = lblResult;
        divResult.appendChild(p);
        divContainer.appendChild(divResult);
}

// Adiciona um evento de envio de formulário que chama a função receberParametros
form.addEventListener('submit',receberParametros);


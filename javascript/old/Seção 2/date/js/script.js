// Criação de uma instância de Date com a data 1º de agosto de 2020, às 25h (inválido) e 20 minutos.
let date = new Date(2020,7,1,25,20);

// Função para obter o nome do dia da semana a partir de uma data.
const getDayOfWeek = (date) => {
    switch (date.getDay()) { // Obtém o valor do dia da semana (0 - Domingo, 1 - Segunda, ..., 6 - Sábado).
        case 0:
            return "Domingo"
        case 1:
            return "Segunda-feira"
        case 2:
            return "Terça-feira"
        case 3:
            return "Quarta-feira"
        case 4:
            return "Quinta-feira"
        case 5:
            return "Sexta-feira"
        case 6:
            return "Sabádo"
    }
}

// Função para obter o nome do mês a partir de uma data.
const getMonthName = (date) => { // Obtém o valor do mês (0 - Janeiro, 1 - Fevereiro, ..., 11 - Dezembro).
    switch (date.getMonth()) {
        case 0:
            return "janeiro"
        case 1:
            return "fevereiro"
        case 2:
            return "março"
        case 3:
            return "abril"
        case 4:
            return "maio"
        case 5:
            return "junho"
        case 6:
            return "julho"
        case 7:
            return "agosto"
        case 8:
            return "setembro"
        case 9:
            return "outubro"
        case 10:
            return "novembro"
        case 11:
            return "dezembro"
    }
}

const padWithZeroLeft = (number) =>{
    return number >= 10 ? `${number}` : `0${number}`  // Retorna o número formatado.
} 


// Função para criar elementos HTML e exibir a mensagem na página.
const createHtml = (msg) => {
    const body = document.body; // Obtém o elemento <body> do documento HTML.
    const div = document.createElement("div"); // Cria um elemento <div>.
    div.classList.add("container"); // Adiciona a classe "container" à <div>.
    const p = document.createElement("p"); // Cria um elemento <p> (parágrafo).
    const eText = document.createTextNode(msg); // Cria um nó de texto com a mensagem.

    body.appendChild(div); // Adiciona a <div> ao <body>.
    div.appendChild(p); // Adiciona o <p> à <div>.
    p.appendChild(eText); // Adiciona o nó de texto ao <p>.
}

// Obtém o nome do dia da semana e o nome do mês a partir da data.
const weekdayName = getDayOfWeek(date);
const monthName = getMonthName(date);

// Monta a mensagem final com informações da data formatadas.
const msg = `${weekdayName}, ${date.getDate()} de ${monthName} de ${date.getFullYear()} ${padWithZeroLeft(date.getHours())}:${padWithZeroLeft(date.getMinutes())}`;

// Chama a função para criar elementos HTML com a mensagem formatada.
createHtml(msg);

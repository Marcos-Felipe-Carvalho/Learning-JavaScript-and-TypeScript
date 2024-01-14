// Seleciona elementos da página
const fieldTask = document.querySelector(".field-task"); // Campo de entrada para novas tarefas
const btnTask = document.querySelector(".btn-task"); // Botão para adicionar tarefas
const listTasks = document.querySelector(".tasks"); // Lista para exibir tarefas

// Cria um item de lista (li) com o texto fornecido
const createItemList = (text) => {
    const li = document.createElement("li");
    li.innerText = text;
    return li;
}

// Cria uma nova tarefa
const createTask = (task) => {
    const itemTask = createItemList(task);
    listTasks.appendChild(itemTask); // Adiciona a tarefa à lista
    clearField(); // Limpa o campo de entrada
    createDeleteButton(itemTask); // Cria o botão de exclusão para a tarefa
    saveTasks(); // Salva as tarefas em localStorage
}

// Valida se o campo de entrada não está vazio antes de criar a tarefa
const validateField = (field) => {
    if (!field) return;
    createTask(field);
}

// Cria um botão de exclusão para um item de tarefa
const createDeleteButton = (item) => {
    item.innerText += ' '; // Adiciona um espaço após o texto da tarefa
    const button = document.createElement('button');
    button.innerText = 'Apagar';
    button.setAttribute('class', 'btn-delete');
    button.setAttribute('title', `Clique aqui para apagar a tarefa: ${item.innerText}`)
    item.appendChild(button); // Anexa o botão de exclusão ao item da tarefa
}

// Limpa o campo de entrada e coloca o foco nele
const clearField = () => {
    fieldTask.value = "";
    fieldTask.focus();
}

// Salva as tarefas em localStorage
const saveTasks = () => {
    const tasks = listTasks.querySelectorAll('li'); // Seleciona todos os itens de tarefa
    const arrTasks = [];
    for (let task of tasks) {
        let taskText = task.innerText.replace('Apagar', ' ').trim(); // Remove o texto "Apagar" e espaços extras
        arrTasks.push(taskText);
    }

    const taskJson = JSON.stringify(arrTasks); // Converte a lista de tarefas em uma string JSON
    localStorage.setItem('tasks', taskJson); // Salva a string JSON em localStorage
}

// Recupera tarefas salvas de localStorage e as exibe na lista
const getSavedTasks = () => {
    const tasks = localStorage.getItem('tasks'); // Recupera a string JSON de localStorage
    const listTasks = JSON.parse(tasks); // Converte a string JSON em uma matriz de tarefas

    for (let task of listTasks) {
        createTask(task); // Cria uma tarefa para cada item na matriz
    }
}

// Eventos:

// Adiciona uma nova tarefa quando o botão "Adicionar" é clicado
btnTask.addEventListener('click', () => {
    validateField(fieldTask.value);
})

// Adiciona uma nova tarefa quando a tecla Enter é pressionada no campo de entrada
fieldTask.addEventListener('keypress', (e) => {
    if (e.key === "Enter") validateField(fieldTask.value);
})

// Exclui uma tarefa quando o botão "Apagar" é clicado
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        e.target.parentElement.remove(); // Remove o item da tarefa da lista
        saveTasks(); // Salva as tarefas em localStorage
    }
})

// Recupera tarefas salvas ao carregar a página
getSavedTasks();

const taskInput = document.getElementById('inputTask');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('listTask');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Digite uma tarefa válida');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('pending'); // Adiciona estado inicial

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.classList.add('edit');
    editBtn.addEventListener('click', () => {
        const newTaskText = prompt('Edite a tarefa:', taskSpan.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskSpan.textContent = newTaskText.trim();
        }
    });

    const statusBtn = document.createElement('button');
    statusBtn.textContent = 'Pendente';
    statusBtn.classList.add('status');
    statusBtn.addEventListener('click', () => {
        if (taskItem.classList.contains('completed')) {
            taskItem.classList.remove('completed');
            taskItem.classList.add('pending');
            statusBtn.textContent = 'Pendente';
            taskSpan.style.textDecoration = 'none';
        } else {
            taskItem.classList.remove('pending');
            taskItem.classList.add('completed');
            statusBtn.textContent = 'Concluído';
            taskSpan.style.textDecoration = 'line-through';
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    buttonsContainer.appendChild(statusBtn); // Adiciona o botão de status
    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(deleteBtn);

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(buttonsContainer);

    taskList.appendChild(taskItem);

    taskInput.value = '';
}
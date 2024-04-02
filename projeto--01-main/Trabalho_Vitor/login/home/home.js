
'use strict'
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskInput = document.getElementById('task-input').value;
        if (taskInput.trim() !== '') {
            createTask(taskInput);
            document.getElementById('task-input').value = '';
        }
    });

    function createTask(taskContent) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';

        const taskText = document.createElement('span');
        taskText.textContent = taskContent;

        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';

        const editButton = document.createElement('button');
        editButton.textContent = '✏️';
        editButton.className = 'edit-btn';
        editButton.addEventListener('click', function() {
            const newText = prompt('Editar tarefa:', taskText.textContent);
            if (newText !== null) {
                taskText.textContent = newText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });

        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.addEventListener('change', function() {
            taskItem.classList.toggle('completed');
        });

        taskButtons.appendChild(editButton);
        taskButtons.appendChild(deleteButton);
        taskItem.appendChild(taskText);
        taskItem.appendChild(taskButtons);
        taskItem.appendChild(completeCheckbox);
        taskList.appendChild(taskItem);
    }
});
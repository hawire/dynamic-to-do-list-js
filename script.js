document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const errorMsg = document.getElementById('error-msg');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const li = document.createElement('li');

            const span = document.createElement('span');
            span.textContent = task.text;
            span.className = 'task-text';
            if (task.completed) span.classList.add('completed');

            span.onclick = () => {
                tasks[index].completed = !tasks[index].completed;
                saveTasks();
                renderTasks();
            };

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Delete';
            removeBtn.className = 'remove-btn';

            removeBtn.onclick = () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            };

            li.appendChild(span);
            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    function addTask() {
        const text = taskInput.value.trim();

        if (!text) {
            errorMsg.textContent = 'Please enter a task.';
            return;
        }

        errorMsg.textContent = '';

        tasks.push({
            text,
            completed: false
        });

        taskInput.value = '';
        saveTasks();
        renderTasks();
    }

    addBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addTask();
    });

    renderTasks();
});

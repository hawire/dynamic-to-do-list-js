
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if task input is not empty
        if (taskText !== '') {
            // Create a new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // When clicked, remove the task from the list
            removeBtn.onclick = () => {
                taskList.removeChild(li);
            };

            // Add the remove button inside the list item
            li.appendChild(removeBtn);

            // Add the list item to the task list
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';
        } else {
            alert('Please enter a task!');
        }
    }

    // When "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // When Enter key is pressed inside the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

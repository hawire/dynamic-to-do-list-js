// Wait for the DOM to fully load before executing any JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new li element
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a new button element for removing the task
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Append the remove button to the li element
            li.appendChild(removeBtn);

            // Append the li to the taskList
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';

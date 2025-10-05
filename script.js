document.addEventListener('DOMContentLoaded', function () {
    var addButton = document.getElementById('add-task-btn');
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');

    function addTask() {
        var taskText = taskInput.value.trim();

        // Only proceed if taskText is not empty
        if (taskText !== '') {
            // Create a new li element
            var li = document.createElement('li');
            li.textContent = taskText;

            // Create a remove button
            var removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            // ✅ Use classList.add instead of className
            removeBtn.classList.add('remove-btn');

            // Assign an onclick event to remove the task
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Append remove button to li
            li.appendChild(removeBtn);

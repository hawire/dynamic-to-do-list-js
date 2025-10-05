document.addEventListener('DOMContentLoaded', function () {
    var addButton = document.getElementById('add-task-btn');
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');

    function addTask() {
        var taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Create a new li element
            var li = document.createElement('li');
            li.textContent = taskText;

            // Create a remove button
            var removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            // ✅ Use classList.add instead of className assignment
            removeBtn.classList.add('remove-btn');

            // When clicked, remove the li element
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Append the remov

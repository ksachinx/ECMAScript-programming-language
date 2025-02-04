let record = [];

// View tasks (renders task list dynamically)
const viewTask = () => {
    let taskList = "";
    record.forEach((val, index) => {
        taskList += `
            <div class="task-card">
                <div class="task-text">${val?.taskname}</div>
                <div class="task-actions">
                    <button class="remove-btn" onclick="removeTask(${index})">Remove</button>
                    <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                </div>
            </div>
        `;
    });
    document.getElementById('taskList').innerHTML = taskList;
};

// Add a new task
const addTask = () => {
    let task = document.getElementById('task').value;

    // Check if task already exists
    let dup = record.filter((val) => val.taskname === task);
    if (dup.length === 1) {
        alert("Task already exists.");
        document.getElementById('task').value = "";
        return false;
    }

    // Create task object
    let obj = {
        taskid: Math.floor(Math.random() * 1000000),
        taskname: task
    };

    // Push to the record and reset the input field
    record.push(obj);
    document.getElementById('task').value = "";
    alert("Task successfully added.");
    viewTask(); // Re-render the task list
};

// Remove task
const removeTask = (index) => {
    record.splice(index, 1); // Removes the task from the array
    alert("Task removed successfully.");
    viewTask(); // Re-render the updated list
};

// Edit task
const editTask = (index) => {
    let newTaskName = prompt("Edit your task", record[index].taskname);
    if (newTaskName !== null && newTaskName.trim() !== "") {
        record[index].taskname = newTaskName.trim();
        alert("Task updated successfully.");
        viewTask(); // Re-render the updated list
    }
};

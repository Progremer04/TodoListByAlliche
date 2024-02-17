// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: tasks.length + 1,
        name: taskInput.value.trim(),
        done: false
    };

    tasks.push(task);

    renderTask(task);

    taskInput.value = "";
}

// Function to render a task
function renderTask(task) {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.dataset.id = task.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => toggleDone(task.id));

    const span = document.createElement("span");
    span.textContent = task.name;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.addEventListener("click", () => editTask(task.id));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}

// Function to toggle task completion
function toggleDone(taskId) {
    const task = tasks.find(task => task.id === taskId);
    task.done = !task.done;
    const li = document.querySelector(`#taskList li[data-id="${taskId}"]`);
    li.classList.toggle("done", task.done);
}

// Function to edit a task
function editTask(taskId) {
    const task = tasks.find(task => task.id === taskId);
    const newName = prompt("Enter the new task name:", task.name);
    if (newName !== null && newName.trim() !== "") {
        task.name = newName.trim();
        const span = document.querySelector(`#taskList li[data-id="${taskId}"] span`);
        span.textContent = newName.trim();
    }
}

// Function to delete a task
function deleteTask(taskId) {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
        const li = document.querySelector(`#taskList li[data-id="${taskId}"]`);
        li.remove();
    }
}


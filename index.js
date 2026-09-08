let tasks = [];

const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");

function addTask() {
    const text = input.value.trim();

    if (text === "") {
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    input.value = "";

    displayTasks(tasks);
}

function displayTasks(taskArray) {
    taskList.innerHTML = "";

    taskArray.forEach((task, index) => {

        const li = document.createElement("li");

        li.className = "task";

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <div class="check" onclick="toggleTask(${index})"></div>

            <span class="task-text">
                ${task.text}
            </span>

            <button class="delete" onclick="deleteTask(${index})">
                ×
            </button>
        `;

        taskList.appendChild(li);
    });

    updateCounter();

    emptyMessage.style.display =
        taskArray.length === 0 ? "block" : "none";
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;

    displayTasks(tasks);
}

function deleteTask(index) {
    tasks.splice(index, 1);

    displayTasks(tasks);
}

function updateCounter() {
    const activeTasks = tasks.filter(
        task => !task.completed
    );

    taskCount.textContent = activeTasks.length;
}

function showAll() {
    displayTasks(tasks);
}

function showActive() {
    const active = tasks.filter(
        task => !task.completed
    );

    displayTasks(active);
}

function showCompleted() {
    const completed = tasks.filter(
        task => task.completed
    );

    displayTasks(completed);
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

displayTasks(tasks);
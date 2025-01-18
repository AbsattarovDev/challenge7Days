// To-Do List

// Array to store tasks
let tasks = [];
let taskId = 1; // Unique ID for each task

// Function to add a task
function addTask(description) {
    if (description.trim() === "") {
        console.log("Task description cannot be empty.");
        return;
    }
    const task = {
        id: taskId++,
        description: description,
        isCompleted: false
    };
    tasks.push(task);
    console.log(`Task added: ${description}`);
}

// Function to view all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("\nYour Tasks:");
        tasks.forEach(task => {
            const status = task.isCompleted ? "Done" : "Not Done";
            console.log(`ID: ${task.id} | ${task.description} - ${status}`);
        });
    }
}

// Function to mark a task as complete
function markComplete(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.isCompleted = true;
        console.log(`Task ID ${id} marked as complete.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Function to delete a task
function deleteTask(id) {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    if (tasks.length < initialLength) {
        console.log(`Task ID ${id} deleted.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Example Usage
addTask("Learn JavaScript");
addTask("Build a To-Do App");
viewTasks();

markComplete(1);
viewTasks();

deleteTask(2);
viewTasks();

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + '<button class="delete-btn" onclick="deleteTask(this)">X</button>'; // Added delete button
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function deleteTask(element) {
    element.parentNode.remove();
}

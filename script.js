const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") return alert("Please enter a task!");

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>
    `;

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
});

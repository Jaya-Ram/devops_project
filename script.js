function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const task = taskInput.value.trim();

  if (task) {
    const li = document.createElement("li");
    li.textContent = task;

    // Delete task on click
    li.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = "";
  }
}

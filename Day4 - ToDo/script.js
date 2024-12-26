function addTaskToList(event) {
  // prevent page reload
  event.preventDefault();

  const taskInput = document.getElementById("taskValue");
  const taskValue = taskInput.value.trim();

  if (taskValue) {
    const li = document.createElement("li");
    li.className =
      "flex items-center justify-between bg-gray-100 p-2 rounded-md shadow";

    const taskText = document.createElement("span");
    taskText.textContent = taskValue;

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "space-x-2";

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.className =
      "px-2 py-1 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none";
    doneButton.onclick = function () {
      markAsDone(doneButton);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className =
      "px-2 py-1 bg-red-500 text-white rounded-md shadow hover:bg-red-600 focus:outline-none";
    deleteButton.onclick = function () {
      deleteTask(deleteButton);
    };

    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(deleteButton);
    li.appendChild(taskText);
    li.appendChild(buttonContainer);

    document.getElementById("myList").appendChild(li);

    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function markAsDone(button) {
  const li = button.parentElement.parentElement;
  li.classList.toggle("line-through");
  li.classList.toggle("text-black-600");
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}

document.getElementById("todoForm").addEventListener("submit", addTaskToList);

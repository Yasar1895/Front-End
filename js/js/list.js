const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.style.animation = "fadeOut 0.4s forwards";
    setTimeout(() => li.remove(), 350);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}

// Optional fade-out animation on deletion
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes fadeOut {
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}`;
document.head.appendChild(styleSheet);

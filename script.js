const taskList = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const typeInput = document.getElementById("typeInput");
  const timeInput = document.getElementById("timeInput");

  const taskText = taskInput.value.trim();
  const taskType = typeInput.value;
  const taskTime = timeInput.value;

  if (taskText === "" || taskType === "") {
    alert("Digite uma tarefa e informe o tipo.");
    return;
  }

  taskList.push({
    text: taskText,
    type: taskType,
    time: taskTime || null
  });

  taskInput.value = "";
  typeInput.value = "";
  timeInput.value = "";

  renderTasks();
}

function renderTasks() {
  const ul = document.getElementById("taskList");
  ul.innerHTML = "";

  const sortedTasks = taskList.slice().sort((a, b) => {
    if (!a.time) return 1;
    if (!b.time) return -1;
    return a.time.localeCompare(b.time);
  });

  sortedTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="card">
        <div class="content-card">
         <h3 class="font-2-s-b" id="color-h3">${task.type}</h3>
         <span class="font-1-s">${task.time}</span>
         <p class="font-1-s">${task.text}</p>
        </div>
      </div>
      <button class="delete-btn" onclick="deleteTask(${index})">x</button>
    `;
    ul.appendChild(li);
    
  });
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}


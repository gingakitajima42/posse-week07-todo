const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const emptyMessage = document.querySelector("#empty-message");
const taskCount = document.querySelector("#task-count");

const updateSummary = () => {
  const numberOfTasks = todoList.children.length;
  taskCount.textContent = `${numberOfTasks}件`;
  emptyMessage.hidden = numberOfTasks !== 0;
};

const createTask = (text) => {
  const item = document.createElement("li");
  item.className = "todo-item";

  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = text;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeButton = document.createElement("button");
  completeButton.className = "task-button complete-button";
  completeButton.type = "button";
  completeButton.textContent = "完了";
  completeButton.addEventListener("click", () => {
    taskText.classList.toggle("is-completed");
    completeButton.textContent = taskText.classList.contains("is-completed")
      ? "戻す"
      : "完了";
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "task-button delete-button";
  deleteButton.type = "button";
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    item.remove();
    updateSummary();
  });

  actions.appendChild(completeButton);
  actions.appendChild(deleteButton);
  item.appendChild(taskText);
  item.appendChild(actions);
  todoList.appendChild(item);
};

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (text === "") {
    todoInput.focus();
    return;
  }

  createTask(text);
  todoInput.value = "";
  todoInput.focus();
  updateSummary();
});

updateSummary();

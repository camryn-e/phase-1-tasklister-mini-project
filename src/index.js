document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", addTask);
});

function addTask(e){
  e.preventDefault();
  const task = e.target.querySelector('#new-task-description').value;
  let listTask = document.createElement("li");
  listTask.innerText = task;                     
  document.getElementById('tasks').appendChild(listTask);
  e.target.querySelector('#new-task-description').value = '';
}
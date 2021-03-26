document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("submit", function(event){
    event.preventDefault();
    const task = document.querySelector("input[type = 'text']");
    let listTask = document.createElement("li");
    let taskText = document.createTextNode(task);
    listTask.appendChild(taskText);                           
    document.getElementById('tasks').appendChild(listTask);
    
  });
});


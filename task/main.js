let taskInput = document.querySelector("#task-input");
let deadlineInput = document.querySelector("#deadline-input");
let addTaskButton = document.querySelector("#add-task");
let tasksWrapper = document.querySelector("#task-wrapper");
let deleteButtons = document.querySelector("#delete-buttons");
let reset = document.querySelector("#reset");
let deleteSelected = document.querySelector("#delete-selected");

addTaskButton.addEventListener("click", function () {
  let deadlineValue = deadlineInput.value;
  let taskValue = taskInput.value.trim();
  taskInput.value = "";
  deadlineInput.value = "";
  if (taskValue == "" || deadlineValue == "") {
    alert("You cant add an empty task.");
    return;
  }

  // tasksWrapper.innerHTML += `<li class="list-group-item">${taskValue}</li>`;

  let newLi = document.createElement("li");
  newLi.classList.add("list-group-item");
  newLi.innerText = taskValue;
  newLi.addEventListener("click", function () {
    this.classList.toggle("active");
  });

  let newSpan = document.createElement("span");
  newSpan.classList.add("badge", "rounded-pill", "bg-danger");
  newSpan.innerText = deadlineValue;

  newLi.append(newSpan);
  tasksWrapper.append(newLi);

  deleteButtons.classList.remove("d-none");
});

reset.addEventListener("click", function () {
  deleteButtons.classList.add("d-none");
  tasksWrapper.innerHTML = "";

  // for (const item of document.querySelectorAll(".list-group-item")) {
  //     item.remove();
  // }
});

// for (const item of document.querySelectorAll(".list-group-item")) {
//     item.addEventListener("click",function () {
//         this.classList.toggle("active");
//     })
// }

deleteSelected.addEventListener("click", function () {
  for (const item of document.querySelectorAll(".list-group-item.active")) {
    item.remove();
  }
  if (document.querySelectorAll(".list-group-item").length == 0) {
    deleteButtons.classList.add("d-none");
  }
});

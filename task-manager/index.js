// Шаг 1
let task = "Описание задачи";
completedTaskCount = 0;

// Шаг 2
function showTask(task) {
  if (!task) {
    return "Задача отсутствует";
  }
  return task;
}

console.log(showTask(task));

// Шаг 3
function setTask(taskDescription) {
  if (task) {
    return "не могу добавить задачу, завершите или удалите предыдущую";
  }
  task = taskDescription;
  return "задача добавлена";
}

console.log(setTask("678"));

// Шаг 4
function completeTask(task, completedTaskCount) {
  if (!task) {
    return "нет задачи";
  }
  task = null;
  completedTaskCount++;
  return task;
}

console.log(completeTask(task, completedTaskCount));

// Шаг 5
function deleteTask(task) {
  if (!task) {
    return "нет задачи";
  }
  task = null;
}

console.log(deleteTask(""));

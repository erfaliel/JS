// Manage form
const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

function addTask(e) {
    e.preventDefault();
    const number = form.task.value; // value of form  for input with the name: task
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
}
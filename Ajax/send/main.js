// get objects from the page
// get the form
const form = document.forms['todo']; // it's the way to put forms into Js object where todo is the form id from html
form.addEventListener('submit', addTask, false);

// Event handlers
function addTask(e) {
    e.preventDefault();
    // Design of the task object
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const data = JSON.stringify(task); // JS object is turned into a json
    const url = 'https://jsonplaceholder.typicode.com/todos'; //Mock as distant api
    const headers = new Headers({           //headers interface
        'Accept':       'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,        // request interface
        {
            method: 'POST',
            header: 'headers',
            body:    data
        }
    )
    // fetch the request we have just built
    fetch(request)
    .then( response => response.json() )
    .then( task => console.log(`Task saved with an id of ${task.id}`) )
    .catch( error => console.log('There was an error:', error))
}
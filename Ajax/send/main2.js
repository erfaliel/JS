// get objects from the page
// get the form
const form = document.forms['todo']; // it's the way to put forms into Js object where todo is the form id from html
// const Globales
const url = 'https://jsonplaceholder.typicode.com/todos'; //Mock as distant api
const headers = new Headers({           //headers interface
    'Accept':       'application/json',
    'Content-Type': 'application/json'
});

// Event handlers

const addTask = (e) => {
    e.preventDefault();
    //console.debug('headers : ', headers);
    // Design of the task object
    //console.debug('url value : ', url);
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const request = buildRequest(task);
    fetchRequest(request); // fetch the request we have just built
}
form.addEventListener('submit', addTask, false);// in this way we need to call function after the declaration.
// Functions design
const buildRequest = (task) => {
    const data = JSON.stringify(task); // JS object is turned into a json
    const request = new Request(url,        // request interface
        {
            method: 'POST',
            header: 'headers',
            body:    data
        }
    )
    return request;
}

const fetchRequest = (request) => {
    fetch(request)
    .then( response => response.json() )
    .then( task => console.log(`Task saved with an id of ${task.id}`) )
    .catch( error => console.log('There was an error:', error))
}
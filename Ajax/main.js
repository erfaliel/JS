// get objects from the web page
const textButton = document.getElementById('number');
const apiButton  = document.getElementById('chuck');
const outputDiv  = document.getElementById('output');
// API declaration
const textURL = 'https://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';
//Event handler
textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waitting for response…';
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
}, false);
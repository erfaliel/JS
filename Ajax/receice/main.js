// get objects from the web page
const textButton = document.getElementById('number');
const apiButton  = document.getElementById('chuck');
const outputDiv  = document.getElementById('output');
// API declaration
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';
//Event handler Number
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
//Event Handler Chuck Norris
apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML= 'Waiting for response…';
        if ( response.ok ) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerHTML = data.value )
    .catch( error => console.log('There was an error: ', error))
}, false);
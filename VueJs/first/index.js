var app = new Vue({             // create Vue object with two parameters
    el: '#app',                 // element binding wit div id
    data: {
        message: 'Hello Vue !'  // data binding with ths object
    }
})

//app.message = 'Now I want this new messages'; // you can enforce this message like this to overwrite the first message

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})
let app = new Vue({             // create Vue object with two parameters
    el: '#app',                 // element binding wit div id
    data: {
        message: 'Hello Vue !'  // data binding with ths object
    }
})

//app.message = 'Now I want this new messages'; // you can enforce this message like this to overwrite the first message

let app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
})

let app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})
// app3.seen = false --> make disappear el app3

let app4 = new Vue({
    el: '#app4',
    data: {
        todos: [                                        // build an array.
            { text: 'apprendre Javascript' },
            { text: 'Puis apprendre Vue JS !' },
            { text: 'Faire un beau Front end dynamique !' }
        ]
    }
})
// app4.todos.push({ text: 'Nouvel élément' }) . --> in programm or in consol add dynamicly a new line.

let app5 = new Vue({
    el: '#app5',
    data: {
        message : 'Hello Vue.js !'
    },
    methods: {                                          // methods to apply to the component.
        reverseMessage: function () {
            this.message = this.message.split( '' ).reverse().join( '' )
        }
    }
})

const app6 = new Vue({
    el: '#app6',
    data: {
        message: 'hello Vue !'
    }
})

/* Définit un nouveau composant appelé todo-item
Vue.component('todo-item', {
    template: '<li>Ceci est une liste.</li>'
})

let app7 = new Vue({… ) // cf index.js */

// Définit le même composant todo-item avec prop pour templatiser le composant
Vue.component('todo-item', {
    // Le composant todo-item accepte maintenant une
    // « prop » qui est comme un attribut personnalisé.
    // Cette prop est appelée todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
let app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            { id: 0, text: 'Légumes' },
            { id: 1, text: 'Fromage' },
            { id: 2, text: "Tout ce que l'on veut manger…" }
        ]
    }
})

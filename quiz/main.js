function random(a, b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}

function shuffle(array) {
    for (let i = array.lenght; i; i--) {
        let j = random(i)-1;
        [array[i-1], array[j]] = [array[j], array[i-1]];
    }
}
const quizz = [
    { name: "Superman", realName: "Clark Kent"},
    { name: "Wonder Woman", realName: "Diana Prince"},
    { name: "Batman", realName: "Bruce Wayne"},
    { name: "Spider_man", realName: "Peter Parker"},
    { name: "The Hulk", realName: "Bruce Banner"},
    { name: "Cyclops", realName: "Scott Summers"}
];

// view object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    response: document.querySelector("#response"),
    start: document.getElementById('start'),
    timer: document.querySelector('#timer strong'),

    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(e) {
        e.style.display = 'block';
    },
    hide(e) {
        e.style.display = 'none';
    },
    setup() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
    },
   teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },
    buttons(array){
        return array.map(value => `<button>${value}</button>`).join(' ');
    }


};
const game = {
    start(quizz) {
        this.score = 0; //initialize score
        this.questions = [...quizz]; // input from obtect quizz
        this.secondsRemaining = 20;
        this.timer = setInterval(this.countdown, 1000);
        view.setup();
        this.ask();
    }, // "," to separate methods and attributes
    ask() {
        console.log('ask() invoked');
        if (this.questions.length > 2) {
            shuffle(this.questions);
            this.question = this.questions.pop();
            const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
            shuffle(options);
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);
            view.render(view.response, view.buttons(options));
        } else {
            this.gameOver();
        }
    },

        // function to control answer vs response
    check(e) {
        console.log('check(event) invoked');
        const response = e.target.textContent;
        const answer = this.question.real_name;
            if (response === answer) {
                view.render(view.result,'Correct !', {'class': 'correct'})
                this.score++;
                view.render(view.score, this.score)
            } else {
                view.render(view.result, `Wrong! The correct answer was ${answer}`, {'class' : 'wrong'})
            }
            this.ask();
    },

        // function gameOver
    gameOver() {
        view.render(view.info, `Game Over, you scored ${this.score} point${this.score !==1 ? 's' : ''}`);
        view.teardown();
        clearInterval(this.timer);
    },
        // function countdown why I cannot use this here!
    countdown() {
        game.secondsRemaining--;
        view.render(view.timer, game.secondsRemaining);
        if (game.secondsRemaining < 0) {
            game.gameOver();
        }
    }


};
// Event listener
view.start.addEventListener('click', () => game.start(quizz), false);
view.response.addEventListener('click', (e) => game.check(e), false);

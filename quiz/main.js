const quizz = [
    { name: "Superman", real_name: "Clark Kent"},
    { name: "Wonder Woman", real_name: "Diana Prince"},
    { name: "Batman", real_name: "Bruce Wayne"}
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
        this.resetForm();
    },
    resetForm() {
        this.response.answer.value = '';
        this.response.answer.focus();
    },
    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
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
        if (this.questions.length > 0) {
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);
        } else {
            this.gameOver();
        }
    },

        // function to control answer vs response
    check(e) {
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.real_name;
            if (response === answer) {
                view.render(view.result,'Correct !', {'class': 'correct'})
                this.score++;
                view.render(view.score, this.score)
            } else {
                view.render(view.result, `Wrong! The correct answer was ${answer}`, {'class' : 'wrong'})
            }
            view.resetForm();
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
view.response.addEventListener("submit", (e) => game.check(e), false);
//view.hide(view.response);


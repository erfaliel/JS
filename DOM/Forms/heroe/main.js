// Declarations
const form = document.forms["hero"];
const label = form.querySelector('label');
const inputName = document.getElementById("heroName");
const error = document.createElement("div");
// Builds into DOM
error.classList.add("error");
error.textContent = "! Your name is not allowed to start with X.";
label.append(error);
// Event Listeners
form.addEventListener('submit', makeHero, false);
inputName.addEventListener('keyup', validateInline, false);
form.heroName.addEventListener('keyup', disableSubmit, false);
// Functions
function makeHero(e) {
    event.preventDefault(); //prevent the form from being submitted
    const hero = {}; // Create empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;
    hero.powers = [];
    /* Old method:
    for (let i=0; i<form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    */
    //This uses the spread operator to turn the node list into an array
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith("X")) {
        error.style.display = "block";
    } else {
        error.style.display = "none"
    }
}

function disableSubmit(e) {
    if (e.target.value === '' || error.style.display === "block") {
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}
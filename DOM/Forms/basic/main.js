const form = document.forms.Search;
const input = form.elements.searchInput;
input.value = "Search here!"

input.addEventListener('focus', () => {
    if (input.value==="Search here!") {
        input.value = ""
    }
},false);

input.addEventListener('blur', () => {
    if (input.value==="") {
        input.value = "Search here!"
    }
},false);

form.addEventListener('submit', search, false);
function search(e) {
    alert(`You Searched for : ${input.value}`)
    event.preventDefault();
}
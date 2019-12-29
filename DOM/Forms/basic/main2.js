const form = document.forms.Search;
const input = form.elements.searchInput;

form.addEventListener('submit', search, false);
function search(e) {
    alert(`You Searched for : ${input.value}`)
    event.preventDefault();
}
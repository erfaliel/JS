// onclick
const clickParagrah = document.getElementById('click');
clickParagrah.addEventListener('click', () => console.log('click'));
clickParagrah.addEventListener('mousedown', () => console.log('down'));
clickParagrah.addEventListener('mouseup', () => console.log('up'));

// ondblclick
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(e) {
    e.target.classList.toggle('highlight');
}

// onmouse
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

// onkeyboard :it's applied on the whole document here.
addEventListener('keydown', highlight); 
// Delegate Events on child.
const ulElement = document.getElementById('list');
ulElement.addEventListener('click', highlight);

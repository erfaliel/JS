const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`;
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate); // call rotate function recursively.
// you cannot set frame rate, it's automaticly set for the device.
// when you change to another browser's tab, function is stopped.


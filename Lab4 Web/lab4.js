"use strict";
let tasks = [];
const button = document.getElementById("add");
button.addEventListener("click", () => {
    const textInput = document.getElementById("input");
    tasks.push(textInput.value);
    render();
});
function render() {
    const div = document.getElementById("tasks");
    const p = document.createElement("p");
    p.textContent = tasks[tasks.length - 1];
    div.appendChild(p);
}

const startBtn = document.querySelector("#start-btn");
const spacesEmptyInput = document.querySelector("#spaces-empty");
const startFormContainer = document.querySelector("#start-form-container");
const counterContainer = document.querySelector("#counter-container");
const counterDisplayContainer = document.querySelector("#counter-display-container");
const counterDisplay = document.querySelector("#counter-display");
const btnAdd = document.querySelector("#btn-add");
const btnRemove = document.querySelector("#btn-remove");
const btnRestart = document.querySelector("#btn-restart");

let allAvailableEmptySpaces = undefined;
let currentAvailableEmptySpaces = undefined;

const DEFAULT_INPUT_VALUE = 32;

spacesEmptyInput.value = DEFAULT_INPUT_VALUE;

startBtn.addEventListener("click", () => {
    allAvailableEmptySpaces = spacesEmptyInput.value;
    startFormContainer.classList.add('d-none');
    counterContainer.classList.remove('d-none');
    currentAvailableEmptySpaces = allAvailableEmptySpaces;
    counterDisplay.innerHTML = currentAvailableEmptySpaces;
});

btnAdd.addEventListener("click", () => {
    if (currentAvailableEmptySpaces > 0)
        currentAvailableEmptySpaces -= 1;

    counterDisplay.innerHTML = currentAvailableEmptySpaces
});

btnRemove.addEventListener("click", () => {
    if (currentAvailableEmptySpaces < allAvailableEmptySpaces)
        currentAvailableEmptySpaces += 1;

    counterDisplay.innerHTML = currentAvailableEmptySpaces
});

btnRestart.addEventListener("click", () => {
    allAvailableEmptySpaces = undefined;
    currentAvailableEmptySpaces = undefined;
    startFormContainer.classList.remove('d-none');
    counterContainer.classList.add('d-none');
    counterDisplay.innerHTML = currentAvailableEmptySpaces;
    spacesEmptyInput.value = DEFAULT_INPUT_VALUE;
});
const display = document.querySelector('#display');

function displayText(input) {
    console.log(input);
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculator() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = error;
    }
}
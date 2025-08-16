const display = document.getElementById('display');

// Append value
function appendvalue(value) {
    display.value += value;
}

// Clear display
function cleardisplay() {
    display.value = "";
}

// Calculate result
function calculateresult() {
    try {
        // Replace 'x' with '*' for multiplication
        let expression = display.value.replace(/x/g, '*');
        display.value = eval(expression);
    } catch (error) {
        alert("Invalid Expression");
        cleardisplay();
    }
}

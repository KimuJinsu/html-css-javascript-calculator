function input(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1); 
}

function convertToHex() {
    const display = document.getElementById("display");
    const decimalValue = parseInt(display.value, 10);
    if (!isNaN(decimalValue)) {
        display.value = decimalValue.toString(16).toUpperCase();
    }
}

function convertToDec() {
    const display = document.getElementById("display");
    const hexValue = display.value;
    if (/^[0-9A-F]+$/i.test(hexValue)) {
        display.value = parseInt(hexValue, 16).toString(10);
    }
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/')); 
    } catch {
        display.value = "Error";
    }
}

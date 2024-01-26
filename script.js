const add = (a, b) => {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}
const modulo = (a, b) => {
    return a % b;
}

const calculate = (a, b, operator) => {
    return operator(a, b);
}
let num1 = "", num2 = "";
let op;
let step = 0;
let res = 0;
let sign = 1;
const display = document.getElementById('output');
const symbol = new Map([[add, '+'], [subtract, '-'], [multiply, '*'], [modulo, '%'], [divide, '/']]);
function getNumber(number) {
    if (step == 0) {
        num1 += number;
        display.value = num1;
    }
    else {
        num2 += number;
        display.value = num2;
    }
}
function operation(name) {
    step++;
    op = name;
    console.log(symbol.get(name));
    display.value = symbol.get(name);
}
function changesign() {
    sign *= -1;
    if (sign == -1) {
        if (step == 0) {
            num1 = '-' + num1;
            display.value = num1;
        }
        else {
            num2 = '-' + num2;
            display.value = num2;
        }
    }
    else {
        if (step == 0) {
            num1 = num1.replace('-', '');
            display.value = num1;

        }
        else {
            num2 = num2.replace('-', '');
            display.value = num2;

        }
    }
}
function cleardisplay() {
    sign = 1;
    num1 = "";
    num2 = "";
    step = 0;
    res = 0;
    display.value = "";
}
function equals() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    res = calculate(num1, num2, op);
    step = 0;
    num2 = "";
    display.value = res;
    num1 = res;
    res = 0;
}
function backspace() {
    if (step == 0) {
        num1 = num1.substring(0, num1.length - 1);
        display.value = num1;
    }
    else {
        num2 = num2.substring(0, num2.length - 1);
        display.value = num2;
    }
}
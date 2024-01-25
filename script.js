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
}
function changesign() {
    sign *= -1;
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
    num1 = "";
    num2 = "";
    display.value = res;
    console.log(res);
    res = 0;
}
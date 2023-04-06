const regex = /[+\-*/]/;
let input = "";

function addNumber(number) {
    input += number;
    document.getElementById("displayInput").value = input;
}

function addDecimal() {
    if (input === "") {
        input = "0.";
    } else if (isNaN(parseInt(input.slice(-1)))) {
        input += "0.";
    } else {
        input += ".";
    }
    document.getElementById("displayInput").value = input;
}

function clearInput() {
    input = "";
    document.getElementById("displayInput").value = input;
}

function backspace() {
    input = input.slice(0, -1);
    document.getElementById("displayInput").value = input;
}

function clearNumber() {
    while (!isNaN(parseInt(input.slice(-1))) || input.slice(-1) === ".") {
        input = input.slice(0, -1);
    }
    document.getElementById("displayInput").value = input;
}

function add() {
    if (input === "") {
        input = "0";
    }
    else if (isNaN(parseInt(input.slice(-1))) && input.slice(-1) !== ".") {
        input = input.slice(0, -1);
    }
    else if (regex.test(input)) input = eval(input);

    input += "+";
    document.getElementById("displayInput").value = input;
}

function subtract() {
    if (input === "") {
        input = "0";
    }
    else if (isNaN(parseInt(input.slice(-1))) && input.slice(-1) !== ".") {
        input = input.slice(0, -1);
    }
    else if (regex.test(input)) input = eval(input);

    input += "-";
    document.getElementById("displayInput").value = input;
}

function multiply() {
    if (input === "") {
        input = "0";
    }
    else if (isNaN(parseInt(input.slice(-1))) && input.slice(-1) !== ".") {
        input = input.slice(0, -1);
    }
    else if (regex.test(input)) input = eval(input);

    input += "*";
    document.getElementById("displayInput").value = input;
}

function divide() {
    if (input === "") {
        input = "0";
    }
    else if (isNaN(parseInt(input.slice(-1))) && input.slice(-1) !== ".") {
        input = input.slice(0, -1);
    }
    else if (regex.test(input)) input = eval(input);

    input += "/";
    document.getElementById("displayInput").value = input;
}

function squareRoot() {
    if (input !== "") {
        input = Math.sqrt(input);
        document.getElementById("displayInput").value = input;
    }
}

function square() {
    if (input !== "") {
        input = Math.pow(input, 2);
        document.getElementById("displayInput").value = input;
    }
}

function reciprocal() {
    if (input !== "") {
        input = 1 / input;
        document.getElementById("displayInput").value = input;
    }
}

function percent() {
if (input !== "") {
        input = input / 100;
        document.getElementById("displayInput").value = input;
    }
}

function changeSign() {
    if (!regex.test(input)) {
        input = "-" + input;
    }
    else {
        //find the index of the last operator
        for (let i = input.length - 1; i >= 0; i--) {
            if (isNaN(parseInt(input[i])) && input[i] !== ".") {
                if (input[i] === "-") {
                    if (isNaN(parseInt(input[i - 1]))) {
                        input = input.slice(0, i) + input.slice(i + 1);
                    } else {
                        input = input.slice(0, i + 1) + "-" + input.slice(i + 1);
                    }
                } else {
                    input = input.slice(0, i + 1) + "-" + input.slice(i + 1);
                }
                break;
            }
        }
    }
    document.getElementById("displayInput").value = input;
}

function equals() {
    if (input !== "") {
        input = eval(input).toString();
        document.getElementById("displayInput").value = input;
    }
}

function addToDisplay(val) {
    document.getElementById('display').value += val;
}

function clearDisplay() {
    document.getElementById('display').value = "";
    document.getElementById('result').innerHTML = "";
}

function calculate(event) {
    if (event && event.keyCode !== 13) {
        return;
    }
    var input = document.getElementById('display').value;
    if (input) {
        var result = eval(input);
        document.getElementById('display').value = result;
        document.getElementById('result').innerHTML = "Result: " + result;
    } else {
        document.getElementById('result').innerHTML = "";
    }
}
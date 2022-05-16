function getvalue(id) {
    let num = document.getElementById(id).value;
    num = parseInt(num);
    return num;
}
const answer = document.getElementById('out');

function plus() {
    const num1 = getvalue('num1');
    const num2 = getvalue('num2');
     const result = num1 + num2;
    answer.innerHTML = result;
}

function minus() {
    const num1 = getvalue('num1');
    const num2 = getvalue('num2');
    result = num1 - num2;
    answer.innerHTML = result;
}

function multiply() {
    const num1 = getvalue('num1');
    const num2 = getvalue('num2');
    result = num1 * num2;
    answer.innerHTML = result;
}

function division() {
    const num1 = getvalue('num1');
    const num2 = getvalue('num2');
    result = num1 / num2;
   
    if (num1 == '0') {
        document.getElementById('error')
            .innerHTML += "не дели блин на нуль! <br>";
    }
    if (num2 == '0') {
        document.getElementById('error')
            .innerHTML += "брось эту затею <br>";
            
    }
    answer.innerHTML = result;
}
let chosen = 0;
const Result = document.getElementById("res");

function one() {
    Result.innerHTML = chosen + 1;
    chosen = Result.textContent;
}

function two() {
    Result.innerHTML = chosen + 2;
    chosen = Result.textContent;
}

function three() {
    Result.innerHTML = chosen + 3;
    chosen = Result.textContent;
}

function four() {
    Result.innerHTML = chosen + 4;
    chosen = Result.textContent;
}

function five() {
    Result.innerHTML = chosen + 5;
    chosen = Result.textContent;
}

function six() {
    Result.innerHTML = chosen + 6;
    chosen = Result.textContent;
}

function seven() {
    Result.innerHTML = chosen + 7;
    chosen = Result.textContent;
}

function eight() {
    Result.innerHTML = chosen + 8;
    chosen = Result.textContent;
}

function nine() {
    Result.innerHTML = chosen + 9;
    chosen = Result.textContent;
}

function zero() {
    Result.innerHTML = chosen + 0;
    chosen = Result.textContent;
}

function multiply() {
    Result.innerHTML = chosen + "×";
    chosen = Result.textContent;
}

function add() {
    Result.innerHTML = chosen + "+";
    chosen = Result.textContent;
}

function minus() {
    Result.innerHTML = chosen + "-";
    chosen = Result.textContent;
}

function dividedBy() {
    Result.innerHTML = chosen + "÷";
    chosen = Result.textContent;
}



function reset() {
    chosen = 0;
    Result.innerHTML = chosen;
}



function res() {

    const pattern = /^\d+[×÷+-]\d+$/;
    const firstDigit = /^\d+/;
    const lastDigit = /\d+$/;

    if (pattern.test(chosen) == true) {
        const Mul = /×/;
        const Add = /\+/;
        const Sub = /-/;
        const Div = /÷/;

        console.log(pattern.test(chosen));
        console.log(firstDigit.test(chosen));
        console.log(lastDigit.test(chosen));

        let result1 = firstDigit.exec(chosen);
        let result2 = lastDigit.exec(chosen);

        let number1 = Number(result1[0]);
        let number2 = Number(result2[0]);

        if (pattern.test(chosen) == true) {
            if (Mul.test(chosen) == true) {
                chosen = number1 * number2;
                Result.innerHTML = chosen;
            } else if (Add.test(chosen) == true) {
                chosen = number1 + number2;
                Result.innerHTML = chosen;
            } else if (Sub.test(chosen) == true) {
                chosen = number1 - number2;
                Result.innerHTML = chosen;
            } else if (Div.test(chosen) == true) {
                chosen = number1 / number2;
                Result.innerHTML = chosen;
            }
        }

        console.log(chosen);
    } else {
        Result.innerHTML = "invalid pattern!";
        alert("the right pattrn is N [×÷+-] N")
    }

}
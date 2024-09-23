alert("Введите число от 0 до 100");

function isSolution(num) {
    let min = 0;
    let max = 100;
    let result = Math.round((max + min) / 2); // Fixed operator to get the middle value

    let operand;
    do {
        operand = prompt(`Число ${result}? (>, < или =)`);
        if (operand === '<') {
            max = result; // Change max to the current guess
        } else if (operand === '>') {
            min = result; // Change min to the current guess
        } else if (operand !== '=') {
            alert("Пожалуйста, введите только '>', '<' или '='.");
        }

        result = Math.round((max + min) / 2); // Calculate the new guess
    } while (operand !== '=');

    return result;
}

alert(`1000 : ${isSolution()}`);
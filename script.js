alert("Введите число от ")

function isSolution(operand) {
    
    let min = 0
    let max = 100
    let result = math.round((max - min) / 2)

    let operand
    operand = prompt(`число ${result}? (>, < или =)`)
    while(operand !== '=') {
        if (operand === `<`) {
            max = result
            result = Math.round((max - min) / 2 )
            operand = prompt(`Число ${result}? (>, < или =)`)
        }
       
    }
return result
}

alert(isSolution(operand))
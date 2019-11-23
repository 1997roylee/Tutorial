function over(firstOperand, secondOperand){
    return firstOperand / secondOperand
}

function times(firstOperand, secondOperand){
    return firstOperand * secondOperand
}

function plus(firstOperand, secondOperand){
    return firstOperand + secondOperand
}

function minus(firstOperand, secondOperand){
    return firstOperand - secondOperand
}




const performCalculation = { // declare object which including all operation methods
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

    // '=': (firstOperand, secondOperand) => secondOperand
};

performCalculation["/"](10, 2) // 10 divide by 2 = 5
performCalculation["*"](10, 2) // 10 times 2 = 20
performCalculation["+"](10, 2) // 10 plus 2 = 12
performCalculation["-"](10, 2) // 10 minus 2 = 8

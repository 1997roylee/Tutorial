// Object

const performCalculation = { // declare object which including all operation methods
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

    // '=': (firstOperand, secondOperand) => secondOperand
};

let result = 0;
result = performCalculation["/"](10, 2) // 10 divide by 2 = 5
console.log(result)

result = performCalculation["*"](10, 2) // 10 times 2 = 20
console.log(result)

result = performCalculation["+"](10, 2) // 10 plus 2 = 12
console.log(result)

result = performCalculation["-"](10, 2) // 10 minus 2 = 8
console.log(result)
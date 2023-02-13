/**
    Your task is to create a function that does four basic mathematical operations.

    The function should take three arguments - operation(string/char), value1(number), value2(number).
    The function should return result of numbers after applying the chosen operation.

    Examples(Operator, value1, value2) --> output
    ('+', 4, 7) --> 11
    ('-', 15, 18) --> -3
    ('*', 5, 5) --> 25
    ('/', 49, 7) --> 7
*/
function basicOp(operation, value1, value2){
    // return eval(value1 + operation + value2); // ----> eval() is a dangerous function
    var cases = {
        '+': value1 + value2,
        '-': value1 - value2,
        '*': value1 * value2,
        '/': value1 / value2
    };
    return cases[operation];
}
const res0 = basicOp('+',4,7);
console.log(res0);
const res1 = basicOp('-',15,18);
console.log(res1);
const res2 = basicOp('*',5,5);
console.log(res2);
const res3 = basicOp('/',49,7);
console.log(res3);
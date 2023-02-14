/**
    Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
    Essentially, rearrange the digits to create the highest possible number.

    Examples:
    Input: 42145 Output: 54421

    Input: 145263 Output: 654321

    Input: 123456789 Output: 987654321
*/
function descendingOrder(n){
    return parseInt(n.toString().split("").sort((a,b)=>b-a).join(""));
}
const res0 = descendingOrder(0);
console.log(res0);
const res1 = descendingOrder(1);
console.log(res1);
const res2 = descendingOrder(111);
console.log(res2);
const res3 = descendingOrder(15);
console.log(res3);
const res4 = descendingOrder(1021);
console.log(res4);
const res5 = descendingOrder(123456789);
console.log(res5);
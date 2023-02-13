/**
    Clock shows h hours, m minutes and s seconds after midnight.

    Your task is to write a function which returns the time since midnight in milliseconds.

    Example:
    h = 0
    m = 1
    s = 1

    result = 61000
    Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
*/

function past(h, m, s){
    //#Happy Coding! ^_^
    // return [h,m,s].reduce((acc,num,idx)=>idx!==2?(acc+num)*60:(acc+num)*1000,0);
    return ((h*3600)+(m*60)+s)*1000;
}
const res0 = past(0,1,1);
console.log(res0);
const res1 = past(1,1,1);
console.log(res1);
const res2 = past(0,0,0);
console.log(res2);
const res3 = past(1,0,1);
console.log(res3);
const res4 = past(1,0,0);
console.log(res4);
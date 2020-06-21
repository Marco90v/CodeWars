/*
*Description:
*Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?
*If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".
*/

function balance(left, right) {
    left = left.split("").map(w=>w==="!"?2:3).reduce((accumulator,value)=>accumulator+value);
    right = right.split("").map(w=>w==="!"?2:3).reduce((accumulator,value)=>accumulator+value);
    return left > right ? "Left" : left < right ? "Right" : "Balance";
}

console.log(balance("!!","??")); // Right
console.log(balance("!??","?!!")); // Left
console.log(balance("!?!!","?!?")); // Left
console.log(balance("!!???!????","??!!?!!!!!!!")); // Balance

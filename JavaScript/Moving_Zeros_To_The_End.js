/**
    Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
    moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
function moveZeros(arr) {
    const zero = arr.filter(e=>e===0);
    const other = arr.filter(e=>e!==0);
    return [...other, ...zero];
    // return arr.filter(x=>x!==0).concat(arr.filter(x=>x===0)); // One Line
}
const res0 = moveZeros([1,2,0,1,0,1,0,3,0,1]);
console.log(res0)
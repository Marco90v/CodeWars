/**
    Alright, detective, one of our colleagues successfully observed our target person, Robby the robber.
    We followed him to a secret warehouse, where we assume to find all the stolen stuff.
    The door to this warehouse is secured by an electronic combination lock.
    Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.
    The keypad has the following layout:
    ┌───┬───┬───┐
    │ 1 │ 2 │ 3 │
    ├───┼───┼───┤
    │ 4 │ 5 │ 6 │
    ├───┼───┼───┤
    │ 7 │ 8 │ 9 │
    └───┼───┼───┘
        │ 0 │
        └───┘
    He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally).
    E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.
    He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm.
    That's why we can try out all possible (*) variations.
    (*) possible in sense of: the observed PIN itself and all variations considering the adjacent digits
    Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits.
    We could name the function getPINs (get_pins in python, GetPINs in C#).
    But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's.
    We already prepared some test cases for you.
    Detective, we are counting on you!
*/

function extraction(numbers,l1,l2){
    const arr = [];
    if(l1<=2 && l1>0 && l2<3){
        arr.push(numbers[l1-1][l2]);
    }
    if(l1>=0 && l1<2 && l2 <3){
        arr.push(numbers[l1+1][l2]);
    }
    if(l1===1){
        if(l2>=0 && l2<3){
            arr.push(numbers[l1][l2+1]);
        }
        if(l2<=3 && l2>0){
            arr.push(numbers[l1][l2-1]);
        }
    }else{
        if(l2>=0 && l2<2){
            arr.push(numbers[l1][l2+1]);
        }
        if(l2<=2 && l2>0){
            arr.push(numbers[l1][l2-1]);
        }
    }
    return arr;
}
function idxNumber(numbers,number){
    let l1 = null;
    let l2 = null;
    for (const n in numbers) {
        const idx = numbers[n].indexOf(number);
        if(idx > -1){
            l1 = Number(n);
            l2 = idx;
            break;
        }
    }
    return [l1,l2];
}
function generate(first, arr){
    if(arr.length > 1){
        const next = arr.shift();
        const res = generate(next, arr).flat();
        return first.map(x=>{
            return res.map(y=>{
                return x+y;
            });
        });
    }else{
        return first.map(x=>{
            return arr[0].map(y=>{
                return x+y;
            });
        });
    }
}
function getPINs(observed) {
    const numbers = [
        ["1","4","7"],
        ["2","5","8","0"],
        ["3","6","9"]
    ];
    const arr = [];
    if(observed.length===1){
        const [l1,l2] = idxNumber(numbers,observed);
        const newArr = extraction(numbers,l1,l2);
        arr.push(...newArr,observed);
        return arr.sort();
    }else{
        const values = observed.split("");
        for (const number of values){
            const [l1,l2] = idxNumber(numbers,number);
            const newArr = extraction(numbers, l1,l2);
            arr.push(newArr.concat(number));
        }
        if(arr.length > 1){
            const first = arr.shift();
            const res = generate(first, arr);
            return res.flat().sort();
        }
    }
}
const res0 = getPINs("8");
console.log(res0);
const res1 = getPINs("11");
console.log(res1);
const res2 = getPINs("369");
console.log(res2);
const res3 = getPINs("24680");
console.log(res3);
const res4 = getPINs("007");
console.log(res4);
const res5 = getPINs("00000000");
console.log(res5);
// console.dir(res5, {'maxArrayLength': null}); //<-- muestra todas las salidas
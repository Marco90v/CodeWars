/**
    Given two strings s1 and s2, we want to visualize how different the two strings are.
    We will only take into account the lowercase letters (a to z).
    First let us count the frequency of each lowercase letters in s1 and s2.

    s1 = "A aaaa bb c"

    s2 = "& aaa bbb c d"

    s1 has 4 'a', 2 'b', 1 'c'

    s2 has 3 'a', 3 'b', 1 'c', 1 'd'

    So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2.
    In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.
    We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4.
    In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

    The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :.
    If the maximum is in s1 as well as in s2 the prefix is =:.

    In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'.
    See examples and "Example Tests".

    Hopefully other examples can make this clearer.

    s1 = "my&friend&Paul has heavy hats! &"
    s2 = "my friend John has many many friends &"
    mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

    s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
    s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
    mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

    s1="Are the kids at home? aaaaa fffff"
    s2="Yes they are here! aaaaa fffff"
    mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
    Note for Swift, R, PowerShell
    The prefix =: is replaced by E:

    s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
    s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
    mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"
*/

const start = Date.now();
function generate(ini,num,letter){
    let text = "";
    text+=ini;
    while (num>=1) {
        text+=letter;
        num--;
    }
    text+="/";
    return text;
}

function mix(s1, s2) {
    const tempS1 = s1.replace(/[A-Z &!?.,]/g,"");
    const tempS2 = s2.replace(/[A-Z &!?.,]/g,"");
    const objectS1 = {};
    const objectS2 = {};
    for (const i of tempS1) objectS1[i] = objectS1[i]>0 ? objectS1[i]+1 : 1;
    for (const i of tempS2) objectS2[i] = objectS2[i]>0 ? objectS2[i]+1 : 1;
    let text = "";
    for (const key of tempS1){
        if(objectS2[key]){
            if(objectS1[key] === objectS2[key]){
                if(objectS1[key]>1) text+=generate("=:",objectS1[key],key);
            }else if(objectS1[key] > objectS2[key]){
                text+=generate("1:",objectS1[key],key);
            }else{
                text+=generate("2:",objectS2[key],key);
            }
            delete objectS1[key];
            delete objectS2[key];
        }else{
            if(objectS1[key]>1) text+=generate("1:",objectS1[key],key);
            delete objectS1[key];
        }
    }
    for (const key of tempS2){
        if(objectS2[key]>1) text+=generate("2:",objectS2[key],key);
        delete objectS2[key];
    }
    text = text.substring(0,text.length-1);
    return text.split("/").sort((a,b)=>{
        a = a.split(":")[1];
        b = b.split(":")[1];
        if(a>b){
            return 1;
        }
        if(a<b){
            return -1;
        }
        if(a===b){
            return 0;
        }
    }).sort((a,b)=>{
        a = Number(a.split(":")[0]) || 3;
        b = Number(b.split(":")[0]) || 3;
        return a-b;
    }).sort((a,b)=>{
        a = a.split(":")[1].length;
        b = b.split(":")[1].length;
        return b-a;
    }).join("/");
}


// The following lines are a shorter solution, but the performance is the same, this solution is shown to be the best in Codewars.
// const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// function mix(s1, s2) {
//   return alphabet
//     .map(char => {
//       const s1Count = s1.split('').filter(x => x === char).length,
//             s2Count = s2.split('').filter(x => x === char).length,
//             maxCount = Math.max(s1Count, s2Count);

//       return {
//         char: char,
//         count: maxCount,
//         src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
//       };
//     })
//     .filter(c => c.count > 1)
//     .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
//     .map(c => `${c.src}:${c.char.repeat(c.count)}`)
//     .join('/');
// }

const res0 = mix("Are they here", "yes, they are here");
console.log(res0);
const res1 = mix("looping is fun but dangerous", "less dangerous than coding");
console.log(res1);
const res2 = mix(" In many languages", " there's a pair of functions");
console.log(res2);
const res3 = mix("Lords of the Fallen", "gamekult");
console.log(res3);
const res4 = mix("codewars", "codewars");
console.log(res4);
const res5 = mix("A generation must confront the looming ", "codewarrs");
console.log(res5);

const end = Date.now();
console.log(end-start+"ms");
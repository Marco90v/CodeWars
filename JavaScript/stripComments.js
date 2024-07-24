/**
 * Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
 * Example:
 * Given an input string of:
 * `apples, pears # and bananas
 * grapes
 * bananas !apples`
 * The output expected would be:
 * `apples, pears
 * grapes
 * bananas`
 */

function solution(text, markers) {
    const s = "\n";
    return text.split(s).map(e=>{
        let d = false;
        return e.split("").reduce((nS,l)=>{
            if(l === s) d = false;
            if(markers.includes(l)) d = true;
            return nS += !d ? l : "";
        },"").trimEnd();
    }).join(s);
}

    // result should == "apples, pears\ngrapes\nbananas"
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
console.log(result)
    // ['aa bb cc', [], 'aa bb cc'],
const result1 = solution(" aa bb cc", []) // " aa bb cc"
console.log(result1)
    // ['#aa bb cc', ['#'], ''],
const result2 = solution("#aa bb cc", ["#"]) // ""
console.log(result2)
    // ['aa # bb\ncc dd', ['#', '!'], 'aa\ncc dd'],
const result3 = solution("aa # bb\ncc dd", ["#", "!"]) // "aa\ncc dd"
console.log(result3)
    // ['aa bb\n#cc dd', ['#'], 'aa bb\n'],
const result4 = solution("aa bb\n#cc dd", ["#"]) // "aa bb\n"
console.log(result4)
    // ['#aa bb\n!cc dd', ['#', '!'], '\n'],
const result5 = solution("#aa bb\n!cc dd", ["#", "!"]) // "\n"
console.log(result5)
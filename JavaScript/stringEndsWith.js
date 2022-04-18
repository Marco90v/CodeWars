function solution(str,ending){
    // return str.endsWith(ending); // Mejor solucion
    return ending.length<=str.length && str.lastIndexOf(ending) + (ending.length) === str.length ? true : false
}

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
solution('abc', 'abcd') // returns false
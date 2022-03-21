/**
 * Description:
 * Complete the solution so that the function will break up camel casing, using a space between words.
 */
function solution(string) {
    /** Solucion n1 */
    let c="";
    for (const i of string) c += /[A-Z]/.test( i ) ? ` ${i}` : i ;
    return c;
    /**
     * Solucion 2
     *  return string.replace(/([A-Z])/g, ' $1');
     */
}

console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
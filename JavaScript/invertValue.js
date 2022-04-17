/**
 * Given a set of numbers, return the additive inverse of each.
 * Each positive becomes negatives, and the negatives become positives.
 * You can assume that all values are integers. Do not mutate the input array/list.
 * ESPAÑOL
 * Dado un conjunto de números, devuelve el inverso aditivo de cada uno.
 * Cada positivo se vuelve negativo, y los negativos se vuelven positivos.
 * Puede suponer que todos los valores son enteros. No cambie la matriz/lista de entrada
 * 
 * invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
 * invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
 * invert([]) == []
 * 
 */

function invert(array) {
    return array.map(e=>-e);
}

invert([1,2,3,4,5]); // [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]); // [-1,2,-3,4,-5]
invert([]); // []
invert([0]); // [-0]
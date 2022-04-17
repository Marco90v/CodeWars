/**
 * Given an array of integers.
 * Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
 * 0 is neither positive nor negative. If the input is an empty array or is null, return an empty array.
 * ESPAÑOL
 * Dada una matriz de enteros.
 * Devuelve una matriz, donde el primer elemento es el recuento de números positivos y el segundo elemento es la suma de números negativos.
 * 0 no es ni positivo ni negativo. Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía.
 */

function countPositivesSumNegatives(input) {

    // MEJOR FORMA
    //     if (!Array.isArray(input) || !input.length) return [];
    //   return input.reduce((arr, n) => {
    //     if (n > 0) arr[0]++;
    //     if (n < 0) arr[1] += n;
    //     return arr;
    //   }, [0, 0]);

    let res = [0,0];
    if(input?.length > 0){
        input.forEach( e => e > 0 ? res[0]++ : res[1]+=e )
    }else{
        res = []
    }
  return res;
}

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);
countPositivesSumNegatives([]);
countPositivesSumNegatives();
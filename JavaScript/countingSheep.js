/**
 * Consider an array/list of sheep where some sheep may be missing from their place.
 * We need a function that counts the number of sheep present in the array (true means present).
 * ESPAÑOL
 * Considere una matriz/lista de ovejas donde algunas ovejas pueden faltar en su lugar.
 * Necesitamos una función que cuente el número de ovejas presentes en la matriz (verdadero significa presente).
 *
 * For example,
 * 
 * [true,  true,  true,  false,
 * true,  true,  true,  true ,
 * true,  false, true,  false,
 * true,  false, false, true ,
 * true,  true,  true,  true ,
 * false, false, true,  true]
 * 
 * La respuesta correcta sería 17. Sugerencia: no olvide verificar valores incorrectos como nulo/indefinido
 */

function countSheeps(arrayOfSheep) {
    // return arrayOfSheeps.filter(Boolean).length; //Mejor respuesta 
    return arrayOfSheep.reduce((a,b)=>  b ? a+1 : a ,0);
}

const array = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

const res = countSheeps(array); // 17
console.log(res);
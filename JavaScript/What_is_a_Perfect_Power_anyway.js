/**
    A perfect power is a classification of positive integers:

    In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer.
    More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

    Your task is to check wheter a given integer is a perfect power.
    If it is a perfect power, return a pair m and k with mk = n as a proof.
    Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

    Note: For a perfect power, there might be several pairs.
    For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions.
    However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.
 */
function isPP(n){
    let res = null;
    for(b=2;b<300;b++){
        let acc = b;
        for(e=2;e<300;e++){
            acc*=b;
            if(acc===n) return [b,e];
        }
    }
    return res;

    // More optimal, faster solution
    // for (var m = 2; m * m <= n; ++ m)
    // for (var k = 2; Math.pow(m, k) <= n; ++ k)
    //   if (Math.pow(m, k) == n) return [m, k];
    // return null;
}
const res0 = isPP(4);
console.log(res0);
const res1 = isPP(9);
console.log(res1);
const res2 = isPP(5);
console.log(res2);
const res3 = isPP(100);
console.log(res3);
const res4 = isPP(133827821568);
console.log(res4);
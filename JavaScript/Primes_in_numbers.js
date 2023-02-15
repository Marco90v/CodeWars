/**
    Given a positive number n > 1 find the prime factor decomposition of n.
    The result will be a string with the following form :

    "(p1**n1)(p2**n2)...(pk**nk)"
    with the p(i) in increasing order and n(i) empty if n(i) is 1.

    Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/
const start = Date.now();
function primeFactors(n){
    let base = n;
    let acc = [];
    while (base > 1) {
        if (base % 2 == 0) {
            acc.push(2);
            base /= 2;
            continue;
        }
        for(let x = 3; x>2; x+=2){
            const res = base%x;
            if (res===0){
                acc.push(x);
                base/=x;
                break;   
            }
        }
    }
    const result = {}
    acc.forEach(el => (result[el] = result[el] + 1 || 1));
    let text = "";
    for (const key in result) {
      result[key] > 1 ?
        text+="("+key+"**"+result[key].toString()+")" :
        text+="("+key+")";
    }
    return text;
}
const res0 = primeFactors(86240);
console.log(res0);
const res1 = primeFactors(7775460);
console.log(res1);
const res2 = primeFactors(777546054186456156489);
console.log(res2);
const end = Date.now();
console.log(end-start);

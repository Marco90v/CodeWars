function orderWeight(strng) {
    var cadena = strng.split(' ');
    
    cadena.sort(function (a, b){
      var aS = getSuma(a);
      var bS = getSuma(b);
      
      if(aS===bS){
        if(a<b){
          return -1;
          }else{
          return 1;
        }
      }else if(aS<bS){
        return -1;
      }
      return 1;
      
    });
    return cadena.join(" ");
}

function getSuma(str) {
  return str.split('').reduce(function(sum, next) {
    return sum + Number(next);
  }, 0);
}
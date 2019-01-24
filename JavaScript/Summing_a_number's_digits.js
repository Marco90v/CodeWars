function sumDigits(number) {
var n = number.toString();
var s = n.split("");
var suma=0;
var b = false;
  s.forEach(function(ia){
    if(b){
      ia = -ia;
      b=false;
    }
    if(ia=="-"){b=true;}
    else{
      suma=suma+Math.abs(ia);
    }
  });
  return suma;
}
function findShort(s){
  var arr = s.split(" ");
  var l =10;
  arr.forEach(function(x){
    if(x.length<l){
      l=x.length;
    }
  });
  return l;
}
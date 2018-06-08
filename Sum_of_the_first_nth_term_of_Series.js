function SeriesSum(n){
  var d=1;
  var suma=0;
  for(x=0; x<n; x++){
    if(x==0){suma=1;}
    else{
      d=d+3;
      suma = suma + (1/d);
    }
  }
  return suma.toFixed(2);
}

function accum(s) {
	var cadena="", cadena2="";
  for(var i=0;i<=s.length-1;i++){
    for(var j=0;j<=i;j++){
      if(j==0){cadena2= cadena2 + s[i].toUpperCase();}
      else{cadena2= cadena2 + s[i].toLowerCase();}
    }
    cadena=cadena+cadena2;cadena2="";
    if(i<(s.length-1)){cadena=cadena+"-"}
  }
  return cadena;
}

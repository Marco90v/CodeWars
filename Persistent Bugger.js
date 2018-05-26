function persistence(num) {
    var contador = 0;
    var suma= 1;
    var a;
    a= trans(num);
    
    while(a.length>1){
      for(x=0; x<a.length;x++){
        suma = suma * parseInt(a[x]);
      }
      contador++;
      a = trans(suma);
      suma=1; 
    }
    return contador;
    
}

function trans(s){
    var i = String(s);
    var a = i.split("");
    return a;
}

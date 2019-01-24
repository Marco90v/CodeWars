var uniqueInOrder=function(iterable){
    var arr = [];
    for(var x=0; x<iterable.length;x++){
      if(iterable[x] != iterable[x+1]){
        arr.push(iterable[x]);
      }
    }
    return arr;
  }
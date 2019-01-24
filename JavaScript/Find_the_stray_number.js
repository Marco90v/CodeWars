function stray(numbers) {
  for(var i=0; i<numbers.length;i++){
    if(numbers[i]!=numbers[i+1]){
      if(i==0&&numbers[i]!=numbers[i+2]){
        return numbers[i];
      }else{
        return numbers[i+1];
      }
    }
  }
}
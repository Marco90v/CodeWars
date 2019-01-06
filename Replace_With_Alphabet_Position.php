/*Welcome.
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.*/

//General Alfabeto en Ingles de manera Dinamica.
/*
  for($i=65; $i<=90; $i++) {  
      $letra = chr($i);  
      echo $letra;  
  } 
*/

//SOLUCION
function alphabet_position(string $s): string {
  $L=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  $a=str_split(strtoupper($s));
  $r="";
  foreach($a as $aa){
  $C=0;
    foreach($L as $l){
      if($l==$aa){
        $C= $C + 1;
        $v= (string)$C." ";
        $r= $r.$v;
      }
      else{$C= $C + 1;}
    }
  }
  return substr($r, 0, -1);
}

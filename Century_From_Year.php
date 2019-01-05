//Proble simple
//Solucion 1
function centuryFromYear($year)
{
  return ceil($year/100);
}

//Solucion 2
function centuryFromYear($year)
{
  $v=$year/100;
  $e=intval($v);
  return ($v > $e)?$e+1:$e;
}

function compare(s1, s2) {
  var sumaS1=0;
  var sumaS2=0;
  if(s1==null || s2==null || s1=="" || s2=="" || !s1.match(/^[a-zA-Z]+$/) || !s2.match(/^[a-zA-Z]+$/)) s1="",s2="";
  s1=s1.toUpperCase();
  s2=s2.toUpperCase();
  for(var i=0; i<s1.length; i++)sumaS1+=s1.charCodeAt(i)
  for(var i=0; i<s2.length; i++)sumaS2+=s2.charCodeAt(i)
  if(sumaS1==sumaS2)return true;
  else return false;
}
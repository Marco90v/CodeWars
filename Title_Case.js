function titleCase(title, minorWords='') {
 var minorArr;
 var titleArr;
 
 if(title.length<1)return '';
 if(minorWords){
   minorArr = minorWords.toLowerCase().split(" ");}
 else{minorArr=[];}
 
 titleArr = title.toLowerCase().split(" ");
 titleArr[0] = capitalize(titleArr[0]);
 
 for(var i=1; i<titleArr.length; i++){
   if(minorArr.indexOf(titleArr[i])===-1){
     titleArr[i]=capitalize(titleArr[i]);}
 }
 return titleArr.join(" ")
}
function capitalize(s){
    return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
};
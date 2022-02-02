function MinWindowSubstring(strArr) { 
  // code goes here  
  var str1 = strArr[0]
  var str2 = strArr[1]
  if(str1.length < str2.length)
    return "No Match";
  if (str1.length > 50 || str2.length > 50)
    return "Overflow";
  var c = []

  for (i=0; str2.length>i; i++){
    if (c[str2[i]] == null )
      c[str2[i]] = 1
    else 
      c[str2[i]]++
  }
  for(var f=str2.length;f<=str1.length;f++){
    for(var i=0; i+1 < str1.length-f+2; i++ ){
      var eval = str1.substring(i, f + i)
      strArr = eval
      Object.keys(c).forEach(key => {
        var subI = 0
        for(var q=1; q <= c[key]; q++){
          subI = eval.substring(subI, eval.length).search(key)
          if (subI < 0){
            strArr = ""
          }
          subI++
        }
      });
      if(strArr == eval)
        return strArr;
    }  
  }
  return "No match"
}
   
// keep this function call here 
// @ts-ignore
console.log(MinWindowSubstring(readline()));

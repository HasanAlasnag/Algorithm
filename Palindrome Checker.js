var checkPalindrome = function(word){
    var checkString = word.split(" ").join("").toLowerCase();
    for(var i = 0; i < checkString.length/2; i++){
         if(checkString[i] != checkString[checkString.length-i-1]){
          return false; 
        }
    }
    return true;
}
var output = checkPalindrome("rasecar");
console.log(output);
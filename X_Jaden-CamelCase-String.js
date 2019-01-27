// Test:
var str = "How can mirrors be real if our eyes aren't real";
// Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");


// Solution:
//1. Mapping through the array.
//2. Change 1st letter after " " (space) toUpperCase!
//3. Return modified string.
String.prototype.toJadenCase = () => {
    var string = [];
    string.map( x => {
        if(x === " "){
            string[x+1].toUpperCase();
        }
    
    });
    return string;
};
str.toJadenCase();
//**********SOLUTIONS FROM CODEWARS */
// Best Practice:
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

  // Clever:
  String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
  };

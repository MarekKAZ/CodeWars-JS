// Beginner_Series_#3_Sum_of_Numbers_7kyu
// INSTRUCTION:
// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// SOLUTION:

function GetSum(a,b){
  var sum = 0;
  if (a<b) { 
    for(i=a; i<=b; i++){
       sum += i;
    }
  } else if (a>b) {
    for(i=a; i>=b; i--){
       sum += i;
    }
  } else {
    sum = b;
  }
  return sum;
}


// SIMPLE TEST:
// Test.describe("Basic Tests:", function(){
       
//     Test.assertEquals(GetSum(0,-1),-1);
//     Test.assertEquals(GetSum(0,1),1);
    
// });

// BEST SOLUTION:
// const{ GetSum = (a, b) => 
//   let min = Math.min(a, b),
//       max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;
// }
// CLEVER:
// function GetSum( a,b )
// {
//    if (a == b) return a;
//    else if (a < b) return a + GetSum(a+1, b);
//    else return a + GetSum(a-1,b);
// }

// CLEVER:
// function GetSum(a,b)
// {
//   return (Math.abs(a - b) + 1) * (a+b) / 2;
// }
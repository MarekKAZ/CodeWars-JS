// INSTRUCION:

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// SOLUTION:

var summation = (num) => {
    var base = [];
    for(k = 1; k <= num; k++){
        base.push(k);
    }
    console.log(base.reduce((a, b) => a + b, 0));
    return base.reduce((a, b) => a + b, 0);  
}

summation(4); // test: Expected output = 10

// Sample Tests:
// describe('summation', function () {
//     it('should return the correct total', function () {
//       Test.assertEquals(summation(1), 1)
//       Test.assertEquals(summation(8), 36)
//     })
//   })

//////// BEST SOLUTIONS: \\\\\\\\\\\\   

// 1. BEST PRACTICE:

// var summation = function (num) {
//     let result = 0;
//     for (var i = 1; i <= num; i++) {
//       result += i;
//     }
    
//     return result;
// }

// 2. CLEVER:

// const summation = n => n * (n + 1) / 2;

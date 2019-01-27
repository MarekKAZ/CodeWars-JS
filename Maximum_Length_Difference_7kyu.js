// INSTRUCTION:

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// #Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// SOLUTION:
const array1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const array2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

function mxdiflg(a1, a2) {
    if(a1.length == 0 || a2.length == 0) {
        return -1
    } else {
        let diffLengths = [];
        a1.forEach( lengthArray1Item => {
            a2.forEach( lengthArray2Item => {
                let diff = Math.abs(lengthArray1Item.length - lengthArray2Item.length);
                diffLengths.push(diff);
                // console.log(diff, lengthArray1Item, lengthArray2Item);
            });
        });

        const result = Math.max.apply(null, diffLengths);

        console.log(result, result.toString());
        return result;
    }
}

mxdiflg(array1, array2);

// let maxNumber = array => {
//     const arrayLength = array.map(item => item.length);
//     console.log(Math.max.apply(null, arrayLength));
//     return Math.max.apply(null, arrayLength);
// };

// const mxdiflg = () => Math.abs( maxNumber(a1) - maxNumber(a2) );


// return Number.toString();


// SIMPLE TEST:
// Test.describe("mxdiflg",function() {
//     Test.it("Basic tests",function() {
//         var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
//         var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
//         Test.assertEquals(mxdiflg(s1, s2), 13);
        
//     })})

// // BEST SOLUTIONS:
// // 1. ------------------------------------------------------------
// function mxdiflg(a1, a2) {
//     if (a1.length === 0 || a2.length === 0) return -1
//     let l1 = a1.map(str => str.length)
//     let l2 = a2.map(str => str.length)
//     return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
//   }

// // 2. ------------------------------------------------------------
//   /*
// function mxdiflg(a1, a2) {
//   a1 = a1.sort(function(a,b){return a.length-b.length});
//   a2 = a2.sort(function(a,b){return a.length-b.length});
//   return a1.length * a2.length ? Math.max(
//     Math.abs(a1[0].length - a2[a2.length-1].length),
//     Math.abs(a2[0].length - a1[a1.length-1].length)
//   ) : -1;
// }
// */

// function mxdiflg(a1, a2) {
//     var max = -1;
//     for(var A1 of a1)
//       for(var A2 of a2)
//         max = Math.max(max, Math.abs(A1.length - A2.length));
//     return max;
//   }
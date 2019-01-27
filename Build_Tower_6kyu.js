// INSTRUCTIONS:

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// JavaScript: returns an Array;

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

// SOLUTION:

// function tower(layers){
//     const array = [];
//     for(let i = 0; i < layers; i+=1){
//         let asterisk = 2*i+1;
//         let space = layers-i;
//         let level = "".concat(" ".repeat(space),"*".repeat(asterisk)," ".repeat(space));
//         array.push(level);
//     }
//     console.log(array);
// }
// tower(3);
// tower(6);

function towerBuilder(nFloors) {
    const array = [];
    for(let i = 0; i < nFloors; i+=1){
      let star = 2*i+1;
      let space = nFloors-(i+1);
      let level = "".concat(" ".repeat(space),"*".repeat(star)," ".repeat(space));
      array.push(level);
    }
    console.log(array);
    return array;
}
towerBuilder(3);
towerBuilder(6);


// TEST:

// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

// describe("Solution", function(){
//     it("should test for something", function(){
//       Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
//     });
//   });

// BEST SOLUTIONS:

// BEST PRACTICE:
// function towerBuilder(n) {
//     return Array.from({length: n}, function(v, k) {
//       const spaces = ' '.repeat(n - k - 1);
//       return spaces + '*'.repeat(k + k + 1) + spaces;
//     });
//   }

// CLEVER:
// function towerBuilder(n) {
//     return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
//   }
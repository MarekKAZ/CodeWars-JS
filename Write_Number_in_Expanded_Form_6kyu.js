// INSTRUCTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

// SOLUTION:
function expandedForm(num) {
    const number = num.toString();
    const message = number
    .split("")
    .map( (n, index) => n + "0".repeat(number.length - index - 1) )
    .filter( n => n > 0)
   .join(" + ");
   return message;
}

expandedForm(7120304);

// SIMPLE TEST:
// Test.assertEquals(expandedForm(12), '10 + 2');
// Test.assertEquals(expandedForm(42), '40 + 2');
// Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');

// BEST SOLUTIONS:

// 1.
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

// 2.
// function expandedForm(num) {
//     return String(num)
//             .split("")
//             .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
//             .filter((num) => Number(num) != 0)
//             .join(" + ")
//   }
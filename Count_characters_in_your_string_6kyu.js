// INSTRUCTION:

// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

// SOLUTION:
function count(string) {  
    const obj={},
    str = string;

    for(i = 0; i < str.length; i++) {
        const letter = str.charAt(i)
        obj[letter] = (isNaN(obj[letter]) ? 1 : obj[letter] + 1);
    }

    return obj;   
}

count("aba");
count("");


// SIMPLE TEST:
// Test.assertDeepEquals(count("aba"), { a: 2, b: 1 }); 
// Test.assertDeepEquals(count(""), {});   

// BEST SOLUTIONS:

// function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }
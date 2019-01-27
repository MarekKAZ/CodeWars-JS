// INSTRUCTION:
// Create a function wordSearch(word,text) that searches to see whether a word word is present in the given text variable.

// Note it has to be a full word which means it is surround by a word boundary (spaces, end/start of string, various punctuation, ... ).

// Example:
// Text - "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

// wordSearch("prince",text)--> true
// wordSearch("beautiful",text)--> true
// wordSearch("clown",text)--> false
// wordSearch("yellow",text)--> false
// wordSearch("akes the",text)--> false

// SOLUTION:


const wordSearch = (word, text) => /^\w+$/.test(word) !== false ? RegExp(word).test(text) : false;



// const myText = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";
// wordSearch("desert", myText);
// wordSearch("blue", myText);
// wordSearch("well", myText);
// wordSearch("house", myText);
// wordSearch("le prince",myText);


// SIMPLE TEST:
// const myText = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

// Test.describe("Fixed Tests (new)", _ => {
//   Test.it("Tests", __ => {
//     Test.assertEquals(wordSearch("desert",myText),true);   
//     Test.assertEquals(wordSearch("blue",myText),false);   
//     Test.assertEquals(wordSearch("well",myText),true);   
//     Test.assertEquals(wordSearch("house",myText),false);
//     Test.assertEquals(wordSearch("beautiful",myText),true);  
//     Test.assertEquals(wordSearch("prince",myText),true);    
//     Test.assertEquals(wordSearch("le prince",myText),false); 
//   });
// });

// BEST SOLUTIONS:
// 1.
// function wordsearch(n){
//     return text.search("\\b"+n+"\\b")>-1
//   }

// 2.
// function wordSearch(word, text){
//     return new RegExp('\\b' + word + '\\b').test(text);
//   }
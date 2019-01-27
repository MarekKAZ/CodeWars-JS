// INSTRUCTION
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"


// SOLUTION:
function revrot(str, size) {
    if(size <= 0 || size > str.length) {
        return "";
    } else {
        let chunks = [];
    // Create chunks []
        for ( i = 0; i< str.length/size; i++){
            let slice = str.slice( (size * i), (size * i + size) );
    // 1. Check if chunk's sum of the cubes of its digits is divisible by 2,
            if(slice.length === size){
                let sliceCube = [];
                for (let j = 0; j < slice.length; j++) {
                    sliceCube.push(Math.pow( slice[j], 3));  
                }
                let sumOfCubes = sliceCube
                    .reduce((accumulator, currentValue) => {
                        return accumulator + currentValue;
                    });
    // 2. if yes reverse the chunk
                if(sumOfCubes % 2 === 0) {
                    let sliceReverse = slice
                    .split("")
                    .reverse()
                    .join('');
                    slice = sliceReverse;
    // 3. else rotate it to the left by one position
                } else {
                    let sliceSplit = slice.split("");
                    let sliceShift = sliceSplit.shift();
                    sliceSplit.push(sliceShift);
                    let sliceRotate = sliceSplit.join('');
                    slice = sliceRotate;
                }
                chunks.push(slice);        
            }
            
        }
    // 4. Put together these modified chunks and return the result as a string.
        // console.log(chunks.join(""));
        let reverseOrRotate = chunks.join("");
        return reverseOrRotate;
    }
}
//test
const Marek = revrot("563000655734469485", 4);
console.log(revrot("123456779", 0));``




// SIMPLE TEST:
// function testing(actual, expected) {
//     Test.assertEquals(actual, expected)
// }

// Test.describe("revrot",function() {
//     Test.it("Basic tests",function() {    
//         testing(revrot("1234", 0), "")
//         testing(revrot("", 0), "")
//         testing(revrot("1234", 5), "")
//         s = "733049910872815764"
//         testing(revrot(s, 5), "330479108928157")
// })})



// BEST SOLUTION:
// // 1. -----------------------------------------------------------------------
// function revrot(str, sz) {
//     if (sz < 1 || sz > str.length) 
//       return '';
  
//     let reverse = s => s.split('').reverse().join('');
//     let rotate  = s => s.slice(1) + s.slice(0, 1);
//     let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0); 
  
//     return str
//       .match(new RegExp('.{' + sz + '}', 'g'))
//       .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
//       .join('');
//   }

// // 2. -----------------------------------------------------------------------
// function revrot(str, sz) {
//     if(!sz||sz<0||sz>str.length)return '';
//     var arr=str.match(new RegExp('\\d{'+sz+'}','g'));
//     return arr.map(function(v){
//       if(v.toString().split('').reduce((s,v)=>s+v*1,0)%2===0){
//         return v.split('').reverse().join('');
//       }
//       else return v.slice(1)+v[0];
//     }).join('');
//  }

//  // 3. -----------------------------------------------------------------------
//  function cubeSum(string){
//     return string.split('').map(e=> Math.pow(Number(e),3)).reduce((p,c)=>p+=c);
//   }
  
//   function revrotEach(string){
//     if(cubeSum(string)%2===0){
//       return string.split('').reverse().join('');
//     }
//     else{
//       return string.slice(1) + string.slice(0,1);
//     }
//   }
  
//   function revrot(str, sz) {
//     if(sz === 0 || str.length < sz){
//       return '';
//     }
//     else{
//        var arr = [];
//       for(var c = 0; c < str.length; c+=sz){
//         arr.push(str.slice(c,c+sz));
//       }
//       return arr.filter(e=> e.length===sz).map(e=>revrotEach(e)).join('');
//     }
//   }
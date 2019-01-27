// INSTRUCTION:
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]  
// SOLUTION:

function upArray(arr){
    if( !arr.some( n => n.toString().length > 1) && !arr.some( n => !Number.isInteger(n) ) && arr.length !== 0 ) {
        let array = arr;
        for(let i=1; i<array.length; i++) {
            array[array.length - i] += 1;
            if(array[array.length - i] > 9) {
                array[array.length - i] = 0;
                array[array.length - (i+1)] += 1;   
                if(array[array.length - (i+1)] > 9 && array.indexOf(array[array.length - (i+1)]) == 0 ) {
                    array[array.length - (i+1)] = 0;
                    array.unshift(1);
                    break; 
                }
            }
            if(array[array.length - (i+1)] < 10 ) {
                break;
            }
        }
        return array;
    } else {
        return null;
    }
}

upArray([9,9,9]);
upArray([2,3,9]);
upArray([4,3,2,5]);
upArray([1,-9]);
// upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7]);
// upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7, 5, 3, 2, 6, 7, 8, 4, 2, 4, 2, 6, 7, 8, 7, 4, 5, 2, 1]);


// SIMPLE TEST:
// Test.assertSimilar(upArray([2,3,9]), [2,4,0]);
// Test.assertSimilar(upArray([4,3,2,5]), [4,3,2,6]);
// Test.assertSimilar(upArray([1,-9]), null);

// BEST SOLUTION:

/* 
Title =====
    Sorted? yes? no? how?

Task ========
    Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
    
Note ======
    You can assume the array will always be valid, and there will always be one correct answer.

*/

// Answer

function isSortedAndHow(arr) {
    return arr.every((e, i) => i == 0 || arr[i] >= arr[i - 1]) ? 'yes, ascending' :
           arr.every((e, i) => i == 0 || arr[i] <= arr[i - 1]) ? 'yes, descending' : 'no' 
  }
  
/* 
Title =========
    Maximum Product

Task =======
    Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Note ============
    Array/list size is at least 2.

    Array/list numbers could be a mixture of positives, negatives also zeroes .

Example ========
    adjacentElementsProduct([1, 2, 3]); ==> return 6

*/

// Answer

function adjacentElementsProduct(arr) {
    let maxProduct = [];
    for (let i = 0; i < arr.length; i++) {
      let firstNum = arr[i];
      let secondNum = arr[i + 1];
      let multiplying = firstNum * secondNum
      
      maxProduct.push(multiplying)
    }
    maxProduct.splice(arr.length - 1)
    return Math.max(...maxProduct)
  }
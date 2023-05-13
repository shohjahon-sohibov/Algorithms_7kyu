/* 
Title =======
    Nth Smallest Element (Array Series #4)
*/

// Answer
const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b).splice(pos - 1, 1)[0]

// Codewars: https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript
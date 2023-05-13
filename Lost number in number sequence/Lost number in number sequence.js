/* 
Title ===== 
    Lost number in number sequence
*/

// Answer
function findDeletedNumber(arr, mixArr) {
    let deletedNum = 0
    if(arr.length == mixArr.length) {
      return 0
    } else {
      arr.map((el) => mixArr.includes(el) ? 0 : deletedNum = el)
    }
    return deletedNum
}

// Codewars: https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript
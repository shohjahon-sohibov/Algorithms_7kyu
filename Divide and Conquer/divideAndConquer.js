/* 
Title ==========
    Divide and Conquer

Task ========
    Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

    Return as a number.
*/

// Answer
function divCon(x){
  let num = 0;
  let str = 0;
  for (let i = 0; i < x.length; i++) {
    x[i] === `${x[i]}` ? str += Number(x[i]) : num += x[i]
  }
  return num - str
}

// Codewars: https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
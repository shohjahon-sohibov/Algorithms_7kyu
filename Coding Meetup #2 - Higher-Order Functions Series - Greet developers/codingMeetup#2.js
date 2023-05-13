/* 
Title =======
    Coding Meetup #2 - Higher-Order Functions Series - Greet developers
*/

// Answer
function greetDevelopers(list) {
  return list.map((el) => el =  {...el, greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`})
  
}

// Codewars: https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
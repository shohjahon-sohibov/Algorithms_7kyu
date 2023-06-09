/* 
Title =========
    Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

Task =======
    You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

    Your task is to return the number of JavaScript developers coming from Europe.


Example =========
    given the following list:

    var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    ];

    your function should return number 1.

    If, there are no JavaScript developers from Europe then your function should return 0.

Note ===========
        
    The format of the strings will always be Europe and JavaScript.
    All data will always be valid and uniform as in the example above.
*/

// Answer

function countDevelopers(list) {
    let count = 0
    let filtered = list.filter((el) => {
      if (el.continent === "Europe" && el.language === "JavaScript")
        return count++
    })
    return count
  }
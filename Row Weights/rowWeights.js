/* 
Title ==========
    Row Weights

Task ========
    Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Example ========
    rowWeights([13, 27, 49])  ==>  return (62, 27)

Note ========
    Array size is at least 1.
    All numbers will be positive
*/

// Answer

function rowWeights(array){
    let team1 = 0;
    let team2 = 0;
    
    for (let i = 0; i < array.length; i++) {
      i % 2 != 1 ? team1 += array[i] : team2 += array[i]
    }
    return [team1, team2]
  }
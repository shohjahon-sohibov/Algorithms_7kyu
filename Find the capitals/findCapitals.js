/*

Title =========

    Find the capitals

Task ==========
    Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
    Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

// Answer

var capitals = function (word) {
    let arr = [...word]
    let res = []
    for(let i = 0; i < arr.length; i++) {
        let word = arr[i]
        let upperCaseWord = arr[i].toUpperCase() 
        if(word == upperCaseWord) {
            res.push(arr.indexOf(word))
        }
    }
    return res
};

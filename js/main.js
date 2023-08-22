/**
 * //P.R.E.P
 Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
**/


//P - A Whole number will be given, positive or negative

//R - Return an array to the console

//E - [1,-2,3,-4,5] //return [-1,2,-3,4,-5]

function invert(array) {
    //Pseudo - Identify the number
    let inversion = array.map((value) => value * -1)
    return inversion;
    //an if/else statement to swap the positive to negative and vice versa

 }

 console.log(invert([-1,2,-3]))

 /**
  Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

**/

//P.R.E.P

//P - A sting will be given

//R - Return to the console

//E - ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number=function(array){

    let lineNumber = array.map(function newOne(line, index) { //i should of had to parameters rather than just one
        for (let index = 0; index < line.length; line++){
            return `"${index + 1}: ${line}"`
        }
    })
    return lineNumber
    

    //Pseudo - A for loop will be needed for the number of values in the array

    //the quotation marks, colon, and space will be needed so cancatanation)

  }

  //couldn't get the right answer, but came really close. This is what the correct answer was

// var numbers = function(array) {
//   return array.map(function (line, index) {
//     return (index + 1) + ": " + line;
//   });
// }

//  console.log(numbers(["a","b","c"]))



/**
 Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

**/

//P.R.E.P = Parameter, Return, Example, Pseudo code

//P - an 2 arrays will be given, all whole numbers, all positive

//R - Return to the console

//E - ([1,2],[1]) == [2]

function arrayDiff(a, b) {
  //P need to filter through array b using values from a
    filterThrough = a.filter((x) => !b.includes(x)) //the does not include x was needed for this to run. everything else was right but that
    return filterThrough
  //a new array needs to be returned
}

console.log(arrayDiff([1,2,3,4,5], [1,2,3]))


/**
 Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
**/
// Introduction:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// 
// Examples:
// 
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


// Notes:
// split sentence into each words
// store words into a variable or array
// reverse word(s) >= 5 characters
// place back the reversed word(s) 


// algorithm
//     check each words if >= 5 characters
//     reverse it if condition true
// combine = unreverse_word + reverse_word


// if (word >= 5) {
//     reverse it
// }



// a=11
// b=12
// c=13
// d=14
// e=15
// f=16
// g=17
// h=18
// i=19

const rege = /\w{5,}/g;

//                0123456789abcdefghi
let wordSpeech = "Hey fellow warriors";
let hols = [...wordSpeech.matchAll(rege)];

let wordHolder = [];
for (const hol of hols) {
    wordHolder = hol
    console.log(wordHolder);
}

// console.log(wordHolder);
// console.log(typeof(hols));
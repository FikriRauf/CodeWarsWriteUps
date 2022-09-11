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
// store each words into a variable
// algorithm
//     check each words if >= 5 characters
//     reverse it if condition true
// combine = unreverse_word + reverse_word


// if (word >= 5) {
//     reverse it
// }


const rege = /\w{5,}/;

let wordSpeech = "Hey fellow warriors";

console.log(wordSpeech.matchAll(rege));
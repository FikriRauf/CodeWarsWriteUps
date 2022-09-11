// Introduction:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// 
// Examples:
// 
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


// Notes:
// - check      : words with characters >= 5 w/i phrase
// - split      : seperate those words and store in variable
// - reverse    : take those words and reverse them
// - assemble   : outcome = unreverse_word + reverse_word


const wordsMoreThanFiveCharacters = /\w{5,}/g;
let sentence = "Hey fellow warriors";
//              0123456789abcdefghi
// let wordHolder = sentence.matchAll(wordsMoreThanFiveCharacters);
let wordHolder = [...sentence.matchAll(wordsMoreThanFiveCharacters)];
console.log(wordHolder.length);

for (int i; i > wordHolder.length; i++) {
    
}
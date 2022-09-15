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

let matchesFound = sentence.match(wordsMoreThanFiveCharacters)

// attempts to extract only the string from the matchAll array 
// using forOf, forIn, and for loops but doesn't work
// but if put in the template literal, it displays as string only
// from https://javascript.info/regexp-groups, [matchAll] : "it’s an array with additional properties" as compared to [match]
// so decided to just use [match] for now

function reversing() {
    let yo = matchesFound[1]
    
    function reverseString() {
        let splitString = yo.split("")
        console.log(splitString)
    }        

    reverseString();

}

reversing();
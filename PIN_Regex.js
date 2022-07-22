// Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


let pinp = 1234;
let pinpp = 1342;
const re = /^\d{4,6}$/g;
const reg = /\w^a-zA-Z\d{4}/;
const rege = /\d{4,6}/;
const regex = /\W/; // /^a-zA-Z0-9_/
const r = /\W\d{4,6}/;

// if (rege.test(pin)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log(r.test(pin));

pinLength = pinp.toString().length;

if (pinLength == 6 || pinLength == 4) {
  console.log(pinLength == 6 || pinLength == 4)
  console.log(pinLength)
  console.log(r.test(pinp) + " hello")
} else {
  console.log(false);
}



// if (pin.toString().length == 4 || pin.toString().length == 6) {
//     if (pin > 6) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }



// // function holdFunc () {
// //     if (typeof(pin) == 'number') {
// //         if (pin !== -pin) {
// //             if (pin.length == 4 || pin.length == 6) {
// //                 if (pin < 0) {
// //                     if (pin.length < 4 || pin.length > 6) {
// //                         return true;
// //                     }
// //                 }
// //             }
// //         }
// //     } else {
// //         return false;
// //     }  
// // 
// // 
// if (typeof(pin) == 'number') {
//   return true;
// } else if (pin !== -pin) {
//   return false;
// } else if (pin.length == 4 || pin.length == 6) {
//   return true;
// } else if (pin < 0) {
//   return false;
// } else if (pin.length < 4 || pin.length > 6) {
//   return false;
// } else {
//   return false;
// }


// // takes care of : -1.234 & a234
// if (pin !== -pin) {
//     return true;
// }


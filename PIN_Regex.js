// Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


let pin = 1234;
const regex = /\d{4,6}/;

pinLength = pin.toString().length;

if (pinLength == 6 || pinLength == 4) {
  console.log(r.test(pin))
} else {
  console.log(false);
}
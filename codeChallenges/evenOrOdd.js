// Write a JavaScript program that defines a variable that stores a Number. 
// The program should print out the String "even" if the Number is even, and the String "odd" if the Number is odd. 
// Hint: You may need to do some extra research on the remainder operator (%) to solve this challenge.

var number = 6

if (number % 2 === 0) {
    console.log("The number is even!")
} else {
    console.log("The number is odd!")
}

// I didn't know that the modulus opperator would keep divding by 2 until you got zero, 
// so i had no idea how to made code that would determind how many times to devide by 2.
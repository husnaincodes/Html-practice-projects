let a = 5;
let b = 3;
let message = "Operators in JavaScript";
console.log(message);

// Arithmetic Operators
console.log("Addition:", a + b);        
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Comparison Operators
console.log("Equal to:", a == b);      
console.log("Not equal to:", a != b);
console.log("Strict equal to:", a === b);
console.log("Strict not equal to:", a !== b);
console.log("Greater than:", a > b);
console.log("Less than:", a < b);
console.log("Greater than or equal to:", a >= b);
console.log("Less than or equal to:", a <= b);

// Logical Operators
let x = true;
let y = false;
console.log("Logical AND:", x && y);  
console.log("Logical OR:", x || y);   
console.log("Logical NOT:", !x);

// Assignment Operators
let c = 10;
c += 5; // c = c + 5
console.log("Addition Assignment:", c);
c -= 3; // c = c - 3
console.log("Subtraction Assignment:", c);
c *= 2; // c = c * 2
console.log("Multiplication Assignment:", c);
c /= 4; // c = c / 4
console.log("Division Assignment:", c);
c %= 3; // c = c % 3
console.log("Modulus Assignment:", c);

// Increment and Decrement Operators
let d = 7;
console.log("Post-increment:", d++); // Outputs 7, then d becomes 8
console.log("Pre-increment:", ++d);   // d becomes 9, then outputs 9
console.log("Post-decrement:", d--); // Outputs 9, then d becomes 8
console.log("Pre-decrement:", --d);   // d becomes 7, then outputs 7    
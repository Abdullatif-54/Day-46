let age = 75;
if(age >= 18){
    console.log(" Are are an Adult")
}
else{
    console.log("Are are an miner")
}
//  else if Ladder
let marks = 34;
if(marks >= 90){
    console.log("Grade A+")
}
else if(marks >=80){
    console.log("Grade A")
}
else if(marks >=70)
{
    console.log("Grade B")
}
else if(marks >= 60){
    console.log("Grade C")
}
else {
    console.log("Failed")
}
// 1. Arithmetic Operators
let a = 3;
let b = 4;
// + ` Addition
console.log( a + b); // 7
// -   Subtraction
 console.log(b -a); // 1
//  *  Multiplication
console.log( a * b); // 12
 // /- Division
 console.log( a /b); // 0.75
 // % Remainder
 console.log(a % b); // 3
 // ** Exponent
 console.log(a **b); // 81
//  2. Assignment Operators 
 let x = 5 // Assign 5 
x += 2; // 7
console.log(x)
x -= 2; // 5 x vuale is 7 now so 7-2 = 5
console.log(x)
x *= 2;// 5 * 2 = 10
console.log(x)
x /= 2; // 10 / 2 = 5
console.log(x)
let y = 17;
y %=2; // 
console.log(y)
y **2;
console.log(y)
// 3. Comparison Operators
let A = 30;
let B =20;
// Greater than
console.log( A > B) // ture
// Less than
console.log(A < B) // false
// Greater than or equal
console.log(A >= B); // ture
// Less than or equal
console.log( A <= B) //  false
// Strictly equal
console.log(A === B); // false
// Strictly not equal
console.log( A !== B) // ture
let c = 20
let d = "20"
// Loose equality
console.log( c==d) // ture
console.log(c != d) // false
// 4. Logical Operators
// && — AND
let  age_enter= 20;
let hasID = true;
console.log(age >= 18 && hasID === true) // true 

let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
}
// # `!` — NOT
let hasPermission = true;

if (!hasPermission) {
    console.log("Access denied.");
}
else {
    console.log("welcome to the course")
}
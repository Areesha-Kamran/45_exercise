let apple = "apple";
let upperCaseApple = "APPLE"
let bigTen = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// test for equality and inequality with strings
console.log("Is apple equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// test using the lower case function
console.log("\nIs APPLE is equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() != "apple");

// numerical tests
// equal to
console.log("\nIs bigTen equal to twenty?");
console.log(10 == twenty);
// not equals to
console.log("\nIs bigTen is not equal to twenty?");
console.log(10 != twenty);

// greater than
console.log("\nIs bigTen is greater than zero?");
console.log(10 > 0);

// less than
console.log("\nIs twenty is less than 10?");
console.log(20 < 10);

// greater than or equal to
console.log("\nIs 10 is greater than or equal to five?");
console.log(10 >= 5);

// less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(20 <= 10);

// test using &/or operations

// and &&
console.log("\nTwenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && 20 > 10);
console.log("\nTwenty is not equals to 10 and twenty is greater than 30");
console.log(twenty != 10 && 20 > 30);

// Or ||
console.log("\nTwenty is greater than 50 and twenty is equals to 20");
console.log(twenty > 50 || 20 == twenty);
console.log("\nTwenty is greater than 50 and twenty is equals to 20");
console.log(twenty > 50 || 20 != twenty);

// test whether an item is include in array
console.log("Is orange include in fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("Is orange include in fruits array");
console.log(!fruits.includes("orange"));
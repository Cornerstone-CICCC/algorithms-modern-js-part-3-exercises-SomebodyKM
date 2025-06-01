// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference. 
// Use the rest operator to handle the variable number of arguments. 
// Test your function with different numbers of arguments.

function subtract(...numbers) {

  return numbers.reduce((total, currentNum) => total - currentNum)

}

console.log(subtract(10, 2, 3)); // Example usage
console.log(subtract(0))
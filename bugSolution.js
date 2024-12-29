function foo(a, b) {
  // Explicitly check for null and handle accordingly
  if (a === null) a = 0; 
  if (b === null) b = 0; 

  return a + b; 
}

console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 2)); // Output: 3
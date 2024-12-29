# Unexpected Behavior with Null Values in JavaScript Function

This repository demonstrates a subtle bug in a JavaScript function that involves unexpected behavior when null values are passed as arguments. The function `foo` is intended to add two numbers, but it returns 0 if either input is null. This behavior might not be immediately obvious to developers, especially if they are accustomed to more common error handling scenarios for arithmetic operations.

The `bug.js` file contains the original buggy code, while `bugSolution.js` provides a corrected version that addresses the unexpected null behavior.  This example highlights the importance of considering null or undefined as valid cases in function inputs and applying explicit error handling as needed rather than implicitly relying on loose comparisons or JavaScript's default type coercion.
